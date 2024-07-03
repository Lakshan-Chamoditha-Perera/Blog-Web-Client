import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import './blog_card.css';

const BlogCard = ({ post, index }) => {
    return (
        <div className={`blog_card ${index % 2 !== 0 ? 'reverse' : ''}`}>
            <div className="blog_img">
                <img src={post.img} alt={post.title} />
            </div>
            <div className="blog_content">
                <Link to={`/blog/${post.id}`}>
                    <h1>{post.title}</h1>
                </Link>
                <p>{post.desc}</p>
                <Button size="small" variant="outlined">Read More</Button>
            </div>
        </div>
    );
};

export default BlogCard;
