import React from 'react';
import './EditProfile.css';
import { Avatar } from '@material-ui/core';

const EditProfile = () => {
    return(
        <div className="SettingEditProfile">
            <div className="ProfileInfo">
                <Avatar>S</Avatar>
                <div>
                    <h5>Shashank Shahare</h5>
                    <p>@srshahare22</p>
                </div>
            </div>
            <p className="BluePara">Change Profile Picture</p>
            <div className="InputSection">
                <h5>Name</h5>
                <input placeholder="Your username"></input>
            </div>
            <div className="InputSection">
                <h5>User Id</h5>
                <input placeholder="Your userid"></input>
            </div>
            <p className="InfoPara">Your user id helps people to find you and tag on blogs or comments</p>
            <div className="InputSection">
                <h5>About</h5>
                <textarea placeholder="About"></textarea>
            </div>
            <div className="InputSection">
                <h5>Email</h5>
                <input placeholder="Email address"></input>
            </div>
            <p className="InfoPara">Your email is safe with us it'll never shows on public profile</p>
            <button>Save</button>
        </div>
    )
}

export default EditProfile