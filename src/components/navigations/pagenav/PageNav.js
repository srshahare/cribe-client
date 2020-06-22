import React, {useState} from 'react';
import './PageNav.css'
import Brand from '../../../assets/images/brand.jpg';
import NotiIcon from '../../../assets/images/notification.png';

import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';
import Search from '../../../hoc/popover/search/Search';
import {OverlayTrigger} from 'react-bootstrap';
import Profile from '../../../hoc/popover/profile/Profile';
import Notification from '../../../hoc/popover/notification/Notification';

import {useHistory} from 'react-router-dom';


const PageNav = (props) => {
    const history = useHistory();
    const profilePop = Profile({
        onLogout: props.onLogout, 
        profile: props.profile, 
        selectHashtag: props.openHashtagPage,
        communityClicked: props.communityClicked
        });
    const [search, setSearch] = useState('');
    const notificationPop = Notification();
    const searchPop = Search(search);

    const jumpToHome = () => {
        history.push('/cribe-client/')
    }

    const searchInputChange = (e) => {
        const value = e.target.value;
        setSearch(value)
    }

    return(
        <div className="PageNav">
            <div className="NavContext">
                <img onClick={jumpToHome} src={Brand} alt="brand logo"></img>
                <div id="myDropdown" className="ItemsContainer">
                    <OverlayTrigger
                        trigger="click"
                        key='bottomnotification'
                        placement='bottom'
                        overlay={notificationPop}
                        >
                        <img src={NotiIcon} alt="notification icon" className="NotiIcon"></img>
                    </OverlayTrigger>
                    <OverlayTrigger
                        trigger="click"
                        key='bottomprofile'
                        placement='bottom'
                        overlay={profilePop}
                        >
                        <Avatar className="Profile">S</Avatar>
                    </OverlayTrigger>
                    <OverlayTrigger
                        trigger="focus"
                        key='bottomsearch'
                        placement='bottom'
                        overlay={searchPop}
                        >
                        <input onChange={searchInputChange} className="SearchBox" placeholder='Search'></input>
                    </OverlayTrigger>
                    <SearchIcon className="SearchIcon" color="action"/>
                </div>
                <div id="myDropdown" className="ItemsContainerMobile">
                    <SearchIcon className="SearchIcon" color="action"/>
                    <OverlayTrigger
                        trigger="click"
                        key='bottomnotification'
                        placement='bottom'
                        overlay={notificationPop}
                        >
                        <img src={NotiIcon} alt="notification icon" className="NotiIcon"></img>
                    </OverlayTrigger>
                    <OverlayTrigger
                        trigger="click"
                        key='bottomprofile'
                        placement='bottom'
                        overlay={profilePop}
                        >
                        <Avatar className="Profile">S</Avatar>
                    </OverlayTrigger>
                </div>
            </div>
        </div>
    )
}

export default PageNav;