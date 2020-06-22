import React from 'react';
import './ExploreMore.css';
import ExploreMore from './ExploreMore';

const ExploreMoreList = (props) => {

    const {blogs} = props;

    return(
        <div className="PageExploreMoreList">
            {blogs.map(blog => {
                return (
                    <ExploreMore
                        key={blog._id} 
                        blog={blog}/>
                )
            })}
        </div>
    )
}

export default ExploreMoreList;