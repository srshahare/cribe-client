import React, {Component} from 'react';
import Blog from './Blog';
import './Blog.css'

class AllBlogs extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="AllBlogsList">
          <div className="BlogList">
            <Blog />
            <Blog />
            <Blog />
            <Blog />
            <Blog />
            <Blog />
            <Blog />
            <Blog />
        </div>
      </div>
    );
  }
}

export default AllBlogs;
