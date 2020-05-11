import React from 'react';
import { connect } from 'react-redux';
import { Post } from '../store/types';
import { timeConverter } from '../utils/date-utils';

class BlogDetail extends React.Component<any, any> {

    constructor(props: any) {
        super(props);

        const {match: {params: {postId}}} = this.props;

        this.state = {
            id: postId
        };
    }

    render() {

        const {posts} = this.props;

        const foundPost: Post = posts.find((item: Post) => item.url === this.state.id);

        return (
            <section className={`container py-5 blog-detail ${!foundPost ? 'skeleton' : ''}`}>
                <div className="row">
                    <div className="col-12">
                        <h1 className="blog-detail__title">{foundPost?.title}</h1>
                        <div className="blog-detail__meta">
                            <img className="blog-detail__avatar" src={foundPost?.authorInfo?.avatar} alt={foundPost?.authorInfo?.fullName}/>
                            <div>
                                <div className="blog-detail__meta-item">{foundPost?.authorInfo?.fullName}</div>
                                <div className="blog-detail__meta-item">{timeConverter(foundPost?.created?._seconds)}</div>
                            </div>
                        </div>
                        <p className="blog-detail__summary">{foundPost?.summary}</p>
                        <div className="blog-detail__image">
                            <img src={foundPost?.featuredImage} alt={foundPost?.title} className="img-fluid"/>
                        </div>
                        <div className="blog-detail__content"
                             dangerouslySetInnerHTML={{__html: foundPost?.content}}/>
                        <div className="blog-detail__tag-box">
                            <div className="blog-detail__tag-text">Etiketler:</div>
                            {foundPost?.tags?.map(item => <span className="blog-detail__tag" key={item}>#{item}</span>)}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default connect((state: any) => ({posts: state.posts}))(BlogDetail);
