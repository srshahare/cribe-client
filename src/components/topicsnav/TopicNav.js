import React from 'react';
import './TopicsNav.css'

const TopicNav = (props) => {

    const {topic, clickedTopic} = props;

    return(
        <div className="TopicItem" onClick={() => clickedTopic(topic._id)}>
            <p>{topic.name}</p>
        </div>
    )
}

export default TopicNav;