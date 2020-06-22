import React from 'react';
import './EditAccount.css';

import Avatar from '@material-ui/core/Avatar';
import { NavLink } from 'react-router-dom';

const EditAccount = (props) => {

    const { name, userid, bio, image, onInputChange, saveClicked, changeProfile } = props;
    console.log(image)
    return(
        <div className="EditAccount">
            <div className="ProfileImgDiv">
                <div className="ImageBox">
                    <Avatar id="uploadUserPreview" className="ProfileImg" alt={name} src={image} />
                    <label htmlFor="files" className="btn">Change Profile Image</label> 
                    <input id="files" type="file" name="file" onChange={changeProfile} placeholder="Change Profile Photo"/>
                </div>
            </div>
            <div className="AccountDetails">
                <div className="AccountName">
                    <input 
                    placeholder="User Name"
                    name="name"
                    value={name}
                    onChange={onInputChange}
                    ></input>
                </div>
                <p><span> 432 </span>Blogs&nbsp;&nbsp;&nbsp;&nbsp;
                    <span> 42 </span>followers&nbsp;&nbsp;&nbsp;&nbsp;
                    <span> 34 </span>followings
                </p>
                <input 
                    placeholder="User Id"
                    name="userid"
                    value={userid}
                    onChange={onInputChange}
                    ></input>
                <h6 className="JoiningText">Member of Cribe since June 2019</h6>
                <textarea 
                    placeholder="Your bio"
                    name="bio"
                    value={bio}
                    onChange={onInputChange}
                    ></textarea>
                <div>
                    <button onClick={saveClicked}>Save Profile</button>
                    <button><NavLink to="/cribe-client/account">Cancel</NavLink></button>
                </div>
            </div>
        </div>
    )
}

export default EditAccount;