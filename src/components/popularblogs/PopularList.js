import React from 'react';
import Blog from './Blog';
import './Blog.css'

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

const PopularList = (props) => {

    const { blogs } = props;

    return (
      <div className="PopularBlogsList">
          <h4>Popular Post</h4>
          <div>
            <Carousel responsive={responsive} infinite={true} 
                // autoPlay={props.deviceType !== "mobile" ? true : false}
                // autoPlaySpeed={3000}
                removeArrowOnDeviceType={["mobile"]}>
                {blogs.map((blog) => {
                    return (
                        <Blog
                          key={blog._id} 
                          blog={blog}/>
                    )
                })}
            </Carousel>
          </div>
      </div>
    );
}

export default PopularList;
