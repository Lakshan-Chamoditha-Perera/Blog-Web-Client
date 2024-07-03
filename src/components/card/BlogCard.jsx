import React from "react";
import Button from "@mui/material/Button";
import './blog_card.css';
import {Avatar} from "@mui/material";

const BlogCard = ({post, index}) => {
    const [toggleState, setToggleState] = React.useState(-1);

    const handleToggle = (index) => {
        setToggleState(index);
    }

    return (

        // Blog Card
        <div className={`blog_card ${index % 2 !== 0 ? 'reverse' : ''}`}>
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

                {/* User Info */}
                <div className='user-container'>
                    <Avatar
                        className="single_post_view-user"
                        src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        alt='user'
                    />
                    <div className="single_post_view-user-info">
                        <span
                            className="single_post_view-user-name">{post.username ? post.username : 'Anonymous'}</span>
                        <span
                            className="single_post_view-date">{post.date ? post.date : new Date().toDateString()}</span>
                    </div>
                </div>
                <div className="single_post_view-img">
                    <img src={post.img} alt={post.title}/>
                </div>
                <h3 className="single_post_view-title">{post.title}</h3>

                <p className="single_post_view-description">
                    {post.desc}
                </p>
            </div>
        </div>
    </div>);
};

export default BlogCard;
