import React from "react";
import { useNavigate } from "react-router-dom"
export default function Signup() {
    const navigate = useNavigate();
    return (
        <div className="entry-form">
            <h1>Register</h1>
        <form className="register-form">
            <label for="fname"></label>
            <input type="text" placeholder="First Name" id="fname" name="fname" />
            <label for="lname"></label>
            <input type="text" placeholder="Enter your password" id="lname=" name="lname" />
            <label for="email"></label>
            <input type="email" placeholder="Email" id="email" name="email" />
            <label for="username"></label>
            <input type="text" placeholder="Username" id="username" name="username" />
            <label for="password"></label>
            <input type="password" placeholder="Password" id="password=" name="email" />
            <label for="confirm_password"></label>
            <input type="password" placeholder="Confirm Password" id="password=" name="email" />
            <label for="phone"></label>
            <input type="tel" placeholder="Phone Number (optional)" id="phone=" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
            <button type="button" className="btn btn-primary btn-sm m-2" > Register </button>
            <button type="button" className="btn btn-primary btn-sm m-2" onClick={() =>navigate("/login")}> Have an account? Login</button>

        </form>
        </div>
    );

}