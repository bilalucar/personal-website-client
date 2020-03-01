import React from 'react';
import { Link } from 'react-router-dom';
import { PostItem } from '../store/types';

const BlogItem = (props: PostItem) => {

    const {title, timestamp, summary, author, url} = props.item;

    const timeConverter = (date: number): string => {
        const timestamp = new Date(date * 1000);
        const months = ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'];

        return `${timestamp.getDate()} ${months[timestamp.getMonth()]} ${timestamp.getFullYear()}`;
    };

    return (
        <div className="row mb-5 blog-item">
            <div className="col-12 col-lg-4"></div>
            <div className="col-12 col-lg-8 blog-item__content wow fadeInUp animated" data-wow-duration="1s"
                 data-wow-delay="0.3s">
                <Link to={`blog/${url}`}><h4 className="blog-item__title">{title}</h4></Link>
                <div className="blog-item__meta">
                    {author}, {timeConverter(timestamp)}
                </div>
                <p>{summary}</p>
            </div>
        </div>
    );
};

export default BlogItem;
