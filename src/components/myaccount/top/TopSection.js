import React from 'react';
import './TopSection.css';
import Avatar from '@material-ui/core/Avatar';

import Badge from '../../../assets/images/premium_badge.png';
import { NavLink } from 'react-router-dom';
import { convertMonth } from '../../../utils/ConvertDate';

// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const TopSection = (props) => {

    const {me, onClickEdit} = props;

    return(
        <div className="AccountSection">
            <div className="ProfileImgDiv">
                <Avatar className="ProfileImg" alt={me.name} src={me.profile_image} />
                {me.premium?
                    <Avatar className="PremiumBadge" src={Badge} alt="premium badge"></Avatar>:
                    ""
                }
            </div>
            <div className="AccountDetails">
                <div className="AccountName">
                    <h2>{me.name}</h2>
                    <NavLink to="/cribe-client/account/edit" onClick={onClickEdit}>Edit Profile</NavLink>
                    {/* <div className="FollowOther">
                        <NavLink to="/follow">Follow</NavLink>
                        <ExpandMoreIcon color="action" style={{cursor: 'pointer'}} />
                    </div> */}
                </div>
                <div className="FollowersDivDesk">
                    <p><span> {me.blogs.length} </span>Blogs&nbsp;&nbsp;&nbsp;&nbsp;
                        <span> {me.followers.length} </span>followers&nbsp;&nbsp;&nbsp;&nbsp;
                        <span> {me.followings.length} </span>followings
                    </p>
                </div>
                <div className="FollowersDiv">
                    <div>
                        <p><span>{me.blogs.length}</span></p>
                        <p>Blogs</p>
                    </div>
                    <div>
                        <p><span>{me.followers.length}</span></p>
                        <p>followers</p>
                    </div>
                    <div>
                        <p><span>{me.followings.length}</span></p>
                        <p>followings</p>
                    </div>
                </div>
                <NavLink to="/cribe-client/account/edit">Edit Profile</NavLink>
                <h6>{`@${me.user_id}`}</h6>
                <h6 className="JoiningText">Member of Cribe since {convertMonth(me.createdAt)}</h6>
                <p className="UserBio">{me.bio}</p>
            </div>
        </div>
    )
}

export default TopSection