import React from "react";
import "./navbar.css";
import {Button} from "@mui/material";

const categories = ["Science", "Technology", "Sports", "Entertainment", "Health"];

const Navbar = () => {
    return (<div className='header'>
            <div className="navbar">
                <a href='/' className="nav__logo">BLOGGER</a>
                <ul className="links__container">
                    {categories.map((category) => (<span className="link">{category}</span>))}
                </ul>

                <div>
                {/*    add new blog button*/}
                    <Button size="small" href={'/write'} variant="outlined">New Blog</Button>
                </div>
            </div>
        </div>);
};

export default Navbar;
