import React from 'react';
import './auth.css';
import {TextField} from "@mui/material";

const Login = () => {
    return (
        <div className="container">
            <div className="content">
                <div className="text-center">
                    <h1 className="title">Sign in to your account</h1>
                    <p className="subtitle">Enter your username and password below</p>
                </div>

                <form className="auth-form">
                    <div className="form-group">
                        <TextField
                            size={'small'}
                            className="input"
                            required
                            type="text"
                            id="username" label="Enter your username" variant="outlined" />
                    </div>
                    <div className="form-group">
                        <p className="forgot-password">Forgot your password?</p>

                        <TextField
                            size={'small'}
                            className="input"
                            type="password"
                            id="password" label="Enter your password" variant="outlined"/>
                    </div>

                    <button className="button" type="submit">
                    Sign in
                    </button>
                </form>

                <p className="text-center">Don't have an account? <a href="/register">Sign up</a></p>
            </div>
        </div>
    );

};

export default Login;


