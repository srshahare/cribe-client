import React from 'react';
import './TopSection.css';
import Avatar from '@material-ui/core/Avatar';

import { NavLink } from 'react-router-dom';

const TopSection = () => {
    return(
        <div className="HashtagSection">
            <div className="ProfileImgDiv">
                <Avatar className="ProfileImg"><h1>#</h1></Avatar>
            </div>
            <div className="AccountDetails">
                <div className="AccountName">
                    <h2>ReactWorld</h2>
                    <NavLink to="/">Delete Hashtag</NavLink>
                </div>
                <p><span> 432 </span>Blogs&nbsp;&nbsp;&nbsp;&nbsp;
                    <span> 42 </span>followers
                </p>
                <h6 className="JoiningText">Created on June 2019</h6>
            </div>
        </div>
    )
}

export default TopSection