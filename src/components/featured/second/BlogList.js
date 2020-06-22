import React, {Component} from 'react';
import Blog from './Blog';
import './Blog.css'

const BlogList = (props) => {

    const {blogs} = props;

    return (
      <div className="FeatureSecondList">
          <div className="BlogList">
            {blogs.map((blog, i) => {
              return (
                <Blog
                  key={blog._id} 
                  blog={blog}/>
              )
            })}
          </div>
      </div>
    );
}

export default BlogList;
