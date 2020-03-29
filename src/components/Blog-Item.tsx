import React from 'react';
import { Link } from 'react-router-dom';
import { PostItem } from '../store/types';
import { timeConverter } from '../utils/date-utils';

const BlogItem = (props: PostItem) => {

    const {title, created, authorInfo: { fullName }, summary, url} = props.item;

    return (
        <div className="row justify-content-end mb-5 blog-item">
            <div className="col-12 col-lg-8 blog-item__content wow fadeInUp animated" data-wow-duration="1s"
                 data-wow-delay="0.3s">
                <Link to={`blog/${url}`}><h4 className="blog-item__title">{title}</h4></Link>
                <div className="blog-item__meta">
                    {fullName}, {timeConverter(created._seconds)}
                </div>
                <p>{summary}</p>
            </div>
        </div>
    );
};

export default BlogItem;
