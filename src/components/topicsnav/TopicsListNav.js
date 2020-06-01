import React from 'react';
import './TopicsNav.css';
import TopicNav from './TopicNav';
import Right from '../../assets/images/right_icon.png';
import Left from '../../assets/images/left_icon.png';

const TopicsListNav = () => {
    return(
        <div className="TopicsNavList">
            <img src={Left} alt="left arrow"></img>
            <div className="AllTopics">
                <TopicNav />
                <TopicNav />
                <TopicNav />
                <TopicNav />
                <TopicNav />
                <TopicNav />
                <TopicNav />
                <TopicNav />
                <TopicNav />
                <TopicNav />
                <TopicNav />
                <TopicNav />
                <TopicNav />
                <TopicNav />
                <TopicNav />
                <TopicNav />
                <TopicNav />
                <TopicNav />
                <TopicNav />
                <TopicNav />
                <TopicNav />
           </div>
           <img src={Right} alt="right arrow"></img>
        </div>
    )
}

export default TopicsListNav;