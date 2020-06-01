import React, {Component} from 'react';
import Promotion from './Promotion';
import './Promotion.css'

class PromotionList extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="FeatureThirdList">
          <div className="PromotionList">
            <Promotion />
            <Promotion />
        </div>
      </div>
    );
  }
}

export default PromotionList;
