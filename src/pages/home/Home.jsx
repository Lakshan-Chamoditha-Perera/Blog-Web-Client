import React from "react";
import './home.css'
import BlogCard from "../../components/card/BlogCard.jsx";

const posts = [{
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
    desc: "lorem  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
}, {
    id: 2,
    title: "Blog 2",
    desc: "lorem  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
}, {
    id: 3,
    title: "Blog 3",
    desc: "lorem  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
}, {
    id: 4,
    title: "Blog 4",
    desc: "This is a sample blog post",
    img: "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
},];

const Home = () => {
    return <div>
        <div className='blog_grid'>
            {
                posts.map((post, index) => (
                    <BlogCard key={index} post={post} index={index}/>))
            }
        </div>
    </div>;
};

export default Home;
