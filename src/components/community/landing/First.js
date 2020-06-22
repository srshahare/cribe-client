import React from 'react';
import './First.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import LandingImg from '../../../assets/images/community.svg'

const First = (props) => {
    AOS.init();

    return(
        <div className="CommunityLandFirst" data-aos="fade-up">
            <div className="LeftContent">
                <h1>Expand Your Audiance Base</h1>
                <p>Velit ipsum voluptate amet commodo veniam elit anim amet elit incididunt tempor proident do. 
                Velit ipsum voluptate amet commodo veniam elit anim amet elit incididunt tempor proident do
                </p>
                <button onClick={props.openCreateDialog}>Create Community</button>
            </div>
            <div className="RightContent">
                <img src={LandingImg} alt="landing first of community"></img>
            </div>
        </div>
    )
}

export default First;