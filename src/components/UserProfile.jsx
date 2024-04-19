import React from 'react';
import '../styles/UserProfile.css'

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
            <h1 style={{ marginTop: '10%' }}>Hi, {name}</h1>
        </>
    );
}

export default UserProfile;
