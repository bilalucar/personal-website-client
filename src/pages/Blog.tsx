import React from 'react';
import { connect } from 'react-redux';

import { Post, PostState } from '../store/types';
import BlogItem from '../components/Blog-Item';

class Blog extends React.Component<any> {

    render() {
        const {posts = []} = this.props;

        return (
            <main role="main" className="blog">
                <section className="container py-5">
                    <div className="row mb-5">
                        <div className="col-12 col-lg-4">
                            <h3 className="home__title wow fadeInUp animated" data-wow-duration="1s"
                                data-wow-delay="0s">Blog</h3>
                        </div>
                    </div>
                    {posts.map((post: Post) => <BlogItem item={post} key={post.id}/>)}
                </section>
            </main>
        );
    }
}

export default connect((state: PostState) => ({posts: state.posts}))(Blog);
