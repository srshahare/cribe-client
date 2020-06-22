import React, {Component} from 'react';
import Recommend from './Recommend';
import './Recommend.css'

class RecommendList extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {

    return (
      <div className="RecommendBlogsList">
          <div className="RecommendList">
            {
            this.props.recommend.map((el, i) => {
                return <Recommend 
                  key={i} 
                  blog={el}
                  count={i+1}/>
            })
            }
        </div>
      </div>
    );
  }
}

export default RecommendList;
