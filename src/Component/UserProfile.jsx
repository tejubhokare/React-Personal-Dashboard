// components/UserProfile.js
import React from 'react';
import '../Styles/UserProfile.css'

function UserProfile({ name, email, profilePicture }) {
    return (
        <>
        <div className="user-profile">
            <img src={profilePicture} alt="Profile" className="profile-picture" />
            <div className="user-details">
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
        <h>Hi, {name}</h>
        </>
    );
}

export default UserProfile;
