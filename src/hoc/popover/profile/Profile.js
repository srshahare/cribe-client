import React from 'react';
import './Profile.css';
import {Popover} from 'react-bootstrap';
import Avatar from '@material-ui/core/Avatar';
import {NavLink} from 'react-router-dom';


const Profile = () => {
    return(
      <Popover id={`popover-positioned-bottom`} className="ProfilePopover">
        <Popover.Title>
          <div className="ProfileTitle">
            <Avatar style={{width: '50px', height: '50px'}}>S</Avatar>
            <div>
              <h6>User Name</h6>
              <p>User_id</p>
            </div>
          </div>
          <div>
            <button>Subscribe</button>
          </div>
        </Popover.Title>
        <Popover.Content>
          <ul>
            <li><NavLink to="/account">Community</NavLink></li>
            <li><NavLink to="/account">Statistics</NavLink></li>
            <li><NavLink to="/account">Personalise interests</NavLink></li>
          </ul>
          <hr></hr>
          <ul>
            <li><NavLink to="/hashtag">Your hashtag</NavLink></li>
            <li><NavLink to="/hashtag/create">Create you hashtag</NavLink></li>
          </ul>
          <hr></hr>
          <ul>
            <li><NavLink to="/account">Account</NavLink></li>
            <li><NavLink to="/account">Setting</NavLink></li>
            <li><NavLink to="/account">Help</NavLink></li>
            <li><NavLink to="/account">Logout</NavLink></li>
          </ul>
        </Popover.Content>
      </Popover>
    )
}

export default Profile;