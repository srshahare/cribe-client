import React from 'react';
import './Profile.css';
import {Popover} from 'react-bootstrap';
import Avatar from '@material-ui/core/Avatar';
import {NavLink} from 'react-router-dom';


const Profile = (props) => {

    const {onLogout, profile} = props

    return(
      <Popover id={`popover-positioned-bottom`} className="ProfilePopover">
        <Popover.Title>
          <div className="ProfileTitle">
            <Avatar style={{width: '50px', height: '50px'}} alt={profile.name} src={profile.image}></Avatar>
            <div>
              <h6>{profile.name}</h6>
              <p>{profile.user_id}</p>
            </div>
          </div>
          <div>
            <button>Subscribe</button>
          </div>
        </Popover.Title>
        <Popover.Content>
          <ul>
            <li onClick={props.communityClicked}>Community</li>
            <li><NavLink to="/cribe-client/community">Create Community</NavLink></li>
            <li><NavLink to="/cribe-client/statistics">Statistics</NavLink></li>
            <li><NavLink to="/cribe-client/interests">Personalise interests</NavLink></li>
          </ul>
          <hr></hr>
          <ul>
            <li onClick={props.selectHashtag}>Your hashtag</li>
            <li><NavLink to="/cribe-client/hashtag/create">Create your hashtag</NavLink></li>
          </ul>
          <hr></hr>
          <ul>
            <li><NavLink to="/cribe-client/account">Account</NavLink></li>
            <li><NavLink to="/cribe-client/setting">Setting</NavLink></li>
            <li><NavLink to="/cribe-client/help">Help</NavLink></li>
            <li onClick={onLogout}>Logout</li>
          </ul>
        </Popover.Content>
      </Popover>
    )
}

export default Profile;