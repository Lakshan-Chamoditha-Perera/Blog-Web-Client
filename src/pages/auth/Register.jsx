import React from 'react'
import {TextField} from "@mui/material";

const Register = () => {
    return (<div className="auth_container">
        <div className="content">
            <h1 className={'section__title'}>Blogger</h1>
            <div className="text-center">
                <h1 className="title">Create an account</h1>
                <p className="subtitle">Enter your email and password below</p>
            </div>

            <form className="auth-form">
                <div className="form-group">
                    <TextField
                        size={'small'}
                        className="input"
                        required
                        type="text"
                        id="username" label="Username or email" variant="outlined"/>
                </div>
                <div className="form-group">
                    <TextField
                        size={'small'}
                        className="input"
                        type="password"
                        required
                        id="password" label="Password" variant="outlined"/>
                </div>
                <div className="form-group">
                    <TextField
                        size={'small'}
                        className="input"
                        required
                        type="text"
                        id="re_password" label="Re-password" variant="outlined"/>
                </div>

                <button className="button" type="submit">
                    Register
                </button>
            </form>

            <p className="text-center">Already have an account? <a href="/login">Sign in</a></p>
        </div>
    </div>)
}

export default Register