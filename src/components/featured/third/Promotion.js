import React, {Component} from 'react';
import './Promotion.css';

import {OverlayTrigger} from 'react-bootstrap';
import User from '../../../hoc/popover/user/User';
import Community from '../../../hoc/popover/community/Community';
import DateToolpit from '../../../hoc/popover/date/DateToolpit';


class Promotion extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    const userPop = User();
    const commPop = Community();
    const datePop = DateToolpit();
    return (
      <div className="FeatureThird">
        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Mount_Everest_as_seen_from_Drukair2_PLW_edit.jpg" alt="mountain"></img>
        <div className="BlackBack"></div>
        <div className="Context">
            <h3>A California Couple Design a Master Bed from Scratch</h3>
            <div className="EndBox">
                <div>
                  <p>by <OverlayTrigger
                      trigger={['hover', 'focus']}
                      key='bottomUser'
                      placement='bottom'
                      overlay={userPop}
                      >
                      <span>Allison Fox </span>
                  </OverlayTrigger><span>|</span>
                  <OverlayTrigger
                      trigger={['hover', 'focus']}
                      key='bottomCommunity'
                      placement='bottom'
                      overlay={commPop}
                      >
                      <span> Cramp stories</span>
                  </OverlayTrigger>
                  </p>
                  <OverlayTrigger
                    placement="bottom"
                    delay={{ show: 250, hide: 400 }}
                    overlay={datePop}
                    >
                    <p>May 13, 2019</p>
                  </OverlayTrigger>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Promotion;
