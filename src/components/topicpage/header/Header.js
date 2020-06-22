import React from 'react';
import './Header.css';

const Header = (props) => {

    const {topic, blogs} = props;

    return(
        <div className="TopicPageHeader">
            <h1>{topic.name}</h1>
            <div className="Info">
                <p><span>{blogs.length}</span> Blogs</p>&nbsp;&nbsp;
                <p><span>{topic.hashtags.length}</span> Hashtags</p>&nbsp;&nbsp;
            </div>
        </div>
    )
}

export default Header;