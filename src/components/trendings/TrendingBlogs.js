import React from 'react';
import Blog from './Blog';
import './Blog.css'

const TrendingBlogs = (props) => {
  
  const {blogs} = props;
  
    return (
      <div className="TrendingBlogsList">
          <div className="BlogList">
            {blogs.map((blog, el) => {
              return(
                <Blog
                  key={blog._id} 
                  blog={blog}/>
              )
            })}
        </div>
      </div>
    );
}

export default TrendingBlogs;
