import React, {Component} from 'react';
import Blog from './Blog';
import './Blog.css'

class TrendingBlogs extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="TrendingBlogsList">
          <div className="BlogList">
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

export default TrendingBlogs;
