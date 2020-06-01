import React from 'react';
import './EditAccount.css';

import Avatar from '@material-ui/core/Avatar';
import { NavLink } from 'react-router-dom';

const EditAccount = () => {
    return(
        <div className="EditAccount">
            <div className="ProfileImgDiv">
                <Avatar className="ProfileImg" alt="Remy Sharp" src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                <p>Change Profile Photo</p>
            </div>
            <div className="AccountDetails">
                <div className="AccountName">
                    <input placeholder="User Name"></input>
                </div>
                <p><span> 432 </span>Blogs&nbsp;&nbsp;&nbsp;&nbsp;
                    <span> 42 </span>followers&nbsp;&nbsp;&nbsp;&nbsp;
                    <span> 34 </span>followings
                </p>
                <input placeholder="User Id"></input>
                <h6 className="JoiningText">Member of Cribe since June 2019</h6>
                <textarea placeholder="Your bio"></textarea>
                <div>
                    <button>Save Profile</button>
                    <NavLink to="/account">Cancel</NavLink>
                </div>
            </div>
        </div>
    )
}

export default EditAccount;