import React from 'react';
import './CreateNav.css'
import Brand from '../../../assets/images/brand.jpg';
import NotiIcon from '../../../assets/images/notification.png';
import { useHistory } from 'react-router-dom';

import Avatar from '@material-ui/core/Avatar';
import Profile from '../../../hoc/popover/profile/Profile';
import Notification from '../../../hoc/popover/notification/Notification';
import {OverlayTrigger} from 'react-bootstrap';
import Button from '@material-ui/core/Button';


const CreateNav = (props) => {
    const history = useHistory();

    const profilePop = Profile({onLogout: props.onLogout, profile: props.profile});
    const notificationPop = Notification();

    const goToHome = () => {
        history.push('/cribe-client');
    }   

    return(
        <div className="CreateNav">
            <div className="NavContext">
                <img src={Brand} onClick={goToHome} alt="brand logo"></img>
                <div id="myDropdown" className="ItemsContainer">
                    <Button color="primary" onClick={props.publishArticle}>Publish</Button>
                    <Button color="secondary" onClick={props.saveArticle}>Save</Button>
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
                <div id="myDropdown" className="ItemsContainerMobile">
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

export default CreateNav;