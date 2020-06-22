import React from 'react';
import './TopicsNav.css';
import TopicNav from './TopicNav';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 12
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3
    }
  };

const TopicsListNav = (props) => {

    const {topics, clickedTopic} = props;

    return(
        <div className="TopicsNavList">
            <Carousel responsive={responsive} infinite={true} 
                // autoPlay={props.deviceType !== "mobile" ? true : false}
                // autoPlaySpeed={5000}
                removeArrowOnDeviceType={["tablet", "mobile"]}>
                {topics.map((topic) => {
                    return (
                        <TopicNav
                            key={topic._id}
                            topic={topic}
                            clickedTopic={clickedTopic}/>
                    )
                })}
            </Carousel>
        </div>
    )
}

export default TopicsListNav;