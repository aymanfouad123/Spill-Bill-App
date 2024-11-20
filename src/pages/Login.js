import React from "react";

import { useNavigate } from "react-router-dom"

export default function Login() {
    
    const navigate = useNavigate();

    return (
        <div className="entry-form">
        <form className="login-form">
            <label for="username">Username</label>
            <input type="email" placeholder="Enter your email" id="email" name="email" />
            <label for="password">Password</label>
            <input type="password" placeholder="Enter your password" id="password=" name="email" />
            <label for="remember">Remember me</label>
            <input type="checkbox" id="remember" name="remember" />
            <button className="btn btn-primary btn-sm m-2" onClick={() =>navigate("/events")}> Log In</button>
            

        </form>
        <button type="button" className="btn btn-primary btn-sm m-2" onClick={() =>navigate("/signup")}> Don't have an account? Register</button>
        </div>
    );
}