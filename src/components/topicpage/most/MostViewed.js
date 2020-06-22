import React from 'react';
import './MostViewed.css';
import Item from '../items/Item';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const MostViewed = (props) => {

    const {blogs} = props;

    return(
        <div className="TopicPageMostViewed">
            <h4>Most Viewed</h4>
            <Carousel responsive={responsive} infinite={true} 
                autoPlay={props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={5000}
                removeArrowOnDeviceType={["mobile"]}>
                {blogs.map((blog) => {
                    return (
                        <Item
                          key={blog._id} 
                          blog={blog}/>
                    )
                })}
            </Carousel>
        </div>
    )
}

export default MostViewed;