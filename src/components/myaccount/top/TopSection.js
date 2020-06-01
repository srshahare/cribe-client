import React from 'react';
import './TopSection.css';
import Avatar from '@material-ui/core/Avatar';

import Badge from '../../../assets/images/premium_badge.png';
import { NavLink } from 'react-router-dom';

const TopSection = () => {
    return(
        <div className="AccountSection">
            <div className="ProfileImgDiv">
                <Avatar className="ProfileImg" alt="Remy Sharp" src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                <Avatar className="PremiumBadge" src={Badge} alt="premium badge"></Avatar>
            </div>
            <div className="AccountDetails">
                <div className="AccountName">
                    <h2>Shashank Shahare</h2>
                    <NavLink to="/account/edit">Edit Profile</NavLink>
                </div>
                <p><span> 432 </span>Blogs&nbsp;&nbsp;&nbsp;&nbsp;
                    <span> 42 </span>followers&nbsp;&nbsp;&nbsp;&nbsp;
                    <span> 34 </span>followings
                </p>
                <h6>@srshahare</h6>
                <h6 className="JoiningText">Member of Cribe since June 2019</h6>
                <p className="UserBio">Qui ipsum non tempor commodo eu amet aliqua incididunt do laborum id eiusmod mollit ex. Mollit non velit duis id esse fugiat cupidatat. Irure ullamco cillum nulla ea irure labore fugiat mollit magna laboris minim. Irure excepteur aute pariatur officia culpa sit commodo cillum eu. Adipisicing sunt culpa irure commodo laboris adipisicing qui incididunt veniam. Tempor Lorem consectetur esse consequat commodo ea in commodo exercitation incididunt eu laborum officia. Pariatur nulla ullamco ipsum aliquip cillum consequat officia.</p>
            </div>
        </div>
    )
}

export default TopSection