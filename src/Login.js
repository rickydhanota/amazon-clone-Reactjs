import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    return (
        <div className = "login">
            <Link to = "/">
                <img className = "login__logo" src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" />
            </Link>

            <div className = "login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value = {email} onChange = {e => setEmail(e.target.value)}></input>
                    <h5>Password</h5>
                    <input type="password" value = {password} onChange = {e => setPassword(e.target.value)}></input>

                    <button className = "login__signInButton">Sign In</button>
                </form>

                <p>
                    By signing-in you agree to THE FAKE AMAZON CLONE MADE BY RICKY DHANOTA Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button className = "login__registerButton">Create your FAKE AMAZON Account</button>
            </div>

        </div>
    )
}

export default Login
