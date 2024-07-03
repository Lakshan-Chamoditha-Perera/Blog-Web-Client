import React from "react";
import Button from "@mui/material/Button";
import './blog_card.css';

const BlogCard = ({post, index}) => {
    const [toggleState, setToggleState] = React.useState(-1);

    const handleToggle = (index) => {
        setToggleState(index);
    }

    return (<div className={`blog_card ${index % 2 !== 0 ? 'reverse' : ''}`}>
        <div className="blog_img">
            <img src={post.img} alt={post.title}/>
        </div>
        <div className="blog_content">
            <h1>{post.title}</h1>
            <p>{post.desc}</p>
            <Button size="small" onClick={() => handleToggle(index)} variant="outlined">Read More</Button>
        </div>

        {/* Single Post View */}
        <div className={toggleState === index ? 'single_post_view active' : 'single_post_view'}>
            <div className="single_post_view-content">
                <i className="uil uil-times single_post_view-close" onClick={() => handleToggle(-1)}></i>
                <h3 className="single_post_view-title">{post.title}</h3>
                <div className="single_post_view-img">
                    <img src={post.img} alt={post.title}/>
                </div>
                <p className="single_post_view-description">
                    {post.desc}
                </p>
            </div>
        </div>
    </div>);
};

export default BlogCard;
