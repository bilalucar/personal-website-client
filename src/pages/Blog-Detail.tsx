import React from 'react';
import { connect } from 'react-redux';
import { Post } from '../store/types';

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

        const timeConverter = (date: number): string => {
            const timestamp = new Date(date * 1000);
            const months = ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'];

            return `${timestamp.getDate()} ${months[timestamp.getMonth()]} ${timestamp.getFullYear()}`;
        };

        if (foundPost) {
            return (
                <section className="container py-5 blog-detail">
                    <div className="row">
                        <div className="col-12">
                            <div className="blog-detail__title">
                                <h4>{foundPost.title}</h4>
                            </div>
                            <div className="blog-detail__meta">
                                {foundPost.author}, {timeConverter(foundPost.timestamp)}
                            </div>
                            <div className="blog-detail__image">
                                <img src={foundPost.imageUrl} alt={foundPost.title} className="img-fluid"/>
                            </div>
                            <div>
                                <div className="blog-detail__content"
                                     dangerouslySetInnerHTML={{__html: foundPost.content}}/>
                            </div>
                        </div>
                    </div>
                </section>
            );
        } else {
            // TODO: To be replaced with skeleton
            return (
                <div>Loading</div>
            );
        }
    }
}

export default connect((state: any) => ({posts: state.posts}))(BlogDetail);
