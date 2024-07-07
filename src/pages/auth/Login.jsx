import React from 'react';
import './auth.css';
import {TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {loginStart} from "../../redux/userSlice.js";
import axios from "axios";

const Login = () => {
    const user = useSelector((state) => state.users.user);
    const dispatch = useDispatch();

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Method handleLogin ()');
        dispatch(loginStart());

        const config = {
            method: 'post', maxBodyLength: Infinity, url: 'http://localhost:5236/users/login', headers: {
                'Content-Type': 'application/json'
            }, data: JSON.stringify({
                email, password
            })
        };
        axios.request(config)
            .then((response) => {
                console.log(response.data);
                if (response.data.success) {
                    console.log("Login successful");
                } else {
                    console.log("Login failed:", response.data.message);
                }
            })
            .catch((error) => {
                console.log("Login error:", error.message);
                if (error.response) {
                    if (error.response.status === 404) {
                        console.log("User not found");
                    } else if (error.response.status === 401) {
                        console.log("Invalid email or password");
                    } else {
                        console.log("Server error:", error.response.data.message);

                    }
                } else {
                    console.log("Network error or server is down");
                }

            });
    };


    return (<div className="auth_container">

        <div className="content">
            <h1 className={'section__title'}>Blogger</h1>
            <div className="text-center">
                <h1 className="title">Sign in to your account</h1>
                <p className="subtitle">Enter your username and password below</p>
            </div>

            <form onSubmit={handleLogin} className="auth-form">
                <div className="form-group">
                    <TextField
                        size='small'
                        className="input"
                        required
                        type="text"
                        onChange={handleEmailChange}
                        id="email" label="Enter your email" variant="outlined"/>
                </div>
                <div className="form-group">
                    <p className="forgot-password">Forgot your password?</p>

                    <TextField
                        size='small'
                        className="input"
                        type="password"
                        required
                        onChange={handlePasswordChange}
                        id="password" label="Enter your password" variant="outlined"/>
                </div>

                <button className="button" type="submit" onClick={handleLogin}>
                    Sign in
                </button>
            </form>

            <p className="text-center">Don't have an account? <a href="/register">Sign up</a></p>
        </div>
    </div>);

};

export default Login;


