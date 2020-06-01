import React from 'react';
import './HomeNav.css'
import Brand from '../../../assets/images/brand.jpg';
import NotiIcon from '../../../assets/images/notification.png';

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';
import Profile from '../../../hoc/popover/profile/Profile';
import {OverlayTrigger} from 'react-bootstrap';

const HomeNav = () => {

    const showDropMenu = () => {
        document.getElementById("myDropdown").classList.toggle("show");
    }

    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
          var dropdowns = document.getElementsByClassName("dropdown-content");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
          }
        }
    }

    const profilePop = Profile();

    return(
        <div className="HomeNav">
            <div className="NavContext">
                <img src={Brand} alt="brand logo"></img>
                <div id="myDropdown" className="ItemsContainer">
                    <img src={NotiIcon} alt="notification icon" className="NotiIcon"></img>
                    <OverlayTrigger
                        trigger="click"
                        key='bottom'
                        placement='bottom'
                        overlay={profilePop}
                        >
                        <Avatar className="Profile">S</Avatar>
                    </OverlayTrigger>
                    <input className="SearchBox" placeholder='Search'></input>
                    <SearchIcon className="SearchIcon" color="action"/>
                </div>
                <div className="dropbtn">
                    <MenuIcon onClick={showDropMenu} />
                </div>
            </div>
        </div>
    )
}

export default HomeNav;