import React, {Component} from 'react';
import Blog from './Blog';
import './Blog.css'

class PopularList extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="PopularBlogsList">
          <h4>Popular Post</h4>
          <div className="PopularList">
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

export default PopularList;
