import React from "react";
import { useNavigate } from "react-router-dom"
import image from "../components/images/profilepic.jpg";

export default function Profile() {
    return (
        <div className="profile-screen">
            <img className="picture" style={{width: 100, height: 100}} src={image} alt="Avatar" />
            <div>
                <h1>Profile</h1>
                <h3>Logan Brown</h3>
                <h3>brownl33@mcmaster.ca</h3>
                <h3>brown123</h3>
            </div>
        </div> 
        

        

    );
}