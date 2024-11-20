import React from "react";
import { useNavigate } from "react-router-dom"
export default function Start() {
    const navigate = useNavigate()

    return (
        <div className="start-form">
            <h1> Spillbill</h1>
            <button type="button" className="btn btn-primary btn-sm m-2" onClick={() =>navigate("/login")}> Login</button>
            <button type="button" className="btn btn-primary btn-sm m-2" onClick={() =>navigate("/signup")}> Register</button>
        </div>
    );
    
}