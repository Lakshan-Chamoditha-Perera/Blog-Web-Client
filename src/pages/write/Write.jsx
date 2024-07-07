import React from 'react';
import './write.css';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {Button, FormControl, FormControlLabel, Radio, RadioGroup, TextField} from "@mui/material";

const Write = () => {
    const [value, setValue] = React.useState('');

    return (
        <div className='write'>
            <div className="write_content">
                <h1 className="write_title">Create Blog</h1>
                <TextField
                    size='small'
                    className="input"
                    required
                    type="text"
                    id="title" label="Title" variant="outlined"/>
                <div className='editor_container'>
                    <ReactQuill className='editor' theme="snow" value={value} onChange={setValue}/>
                </div>
            </div>

            <div className="menu">
                <div className="menu_item">
                    <h2>Category</h2>
                    <FormControl component="fieldset">
                        <RadioGroup
                            aria-label="category"
                            name="category"
                        >
                            <FormControlLabel value="Art" control={<Radio/>} label="Art"/>
                            <FormControlLabel value="Science" control={<Radio/>} label="Science"/>
                            <FormControlLabel value="Technology" control={<Radio/>} label="Technology"/>
                            <FormControlLabel value="Cinema" control={<Radio/>} label="Cinema"/>
                            <FormControlLabel value="Design" control={<Radio/>} label="Design"/>
                            <FormControlLabel value="Food" control={<Radio/>} label="Food"/>
                        </RadioGroup>
                    </FormControl>
                </div>
                <div className="menu_item">
                    <h2>Publish</h2>
                    <span><b>Status:</b> Draft</span>
                    <span><b>Visibility:</b> Public</span>
                    <input type="file" id="file" style={{display: 'none'}}/>
                    <label className="file" htmlFor="file" style={{color: "blue", cursor: "pointer"}}>Upload
                        Image</label>
                    <div className="buttons">
                        <Button variant="contained">Save as a draft</Button>
                        <Button variant="contained" color="success">Update</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Write;
