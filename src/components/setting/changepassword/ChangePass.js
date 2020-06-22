import React from 'react';
import './ChangePass.css';
import { Avatar } from '@material-ui/core';

const ChangePass = () => {
    return(
        <div className="SettingChangePass">
            <div className="ProfileInfo">
                <Avatar>S</Avatar>
                <div>
                    <h5>Shashank Shahare</h5>
                    <p>@srshahare22</p>
                </div>
            </div>
            <div className="InputSection">
                <h5>Old Password</h5>
                <input placeholder="Old Password"></input>
            </div>
            <div className="InputSection">
                <h5>New Password</h5>
                <input placeholder="new Password"></input>
            </div>
            <div className="InputSection">
                <h5>Confirm Password</h5>
                <input placeholder="Confirm password"></input>
            </div>
            <button>Save</button>
            <p className="BluePara">Forgot Password?</p>
        </div>
    )
}

export default ChangePass