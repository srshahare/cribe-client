import React, {Component} from 'react';
import Blog from './Blog';
import './Blog.css'

class BlogList extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="FeatureSecondList">
          <div className="BlogList">
            <Blog />
            <Blog />
            <Blog />
        </div>
      </div>
    );
  }
}

export default BlogList;
