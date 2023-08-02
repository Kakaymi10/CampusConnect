import React from "react";
import { FaUserCircle } from "react-icons/fa"
import { signOut } from "firebase/auth";
import Header from "../features/Header";
import { auth, provider } from "./config";
import './login.css';

function LogOut(){
    return(
        <div className="user-profile">
            <button
                className="profile-button"
                onClick={() => setShowDropdown(!showDropdown)}
            >
                <div className="profile-icon">
                    <FaUserCircle size={30} /> {/* Render the user profile icon */}
                </div>
            </button>
            {showDropdown && (
            <div className="dropdown">
                <p>{user.email}</p>
                <button className="signOut-button" onClick={handleSignOut}>
                    Sign Out
                </button>
           </div>
            )}
        </div>
            
    )
}