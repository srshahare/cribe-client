import React from 'react';
import Blog from './Blog';
import './Blog.css'

const AllBlogs = (props) => {
  const { blogs, bookmarks } = props;

  return (
    <div className="AllBlogsList">
        <div className="BlogList">
          {blogs.map((blog, i) => {
            return(
              <Blog 
                openBlogPage={() => props.openBlogPage(blog._id)}
                key={i}
                blog={blog}
                bookmarks={bookmarks}/>
            )
          })}
      </div>
    </div>
  );
}

export default AllBlogs;
