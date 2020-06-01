import React, {Component} from 'react';
import './Blog.css';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import {OverlayTrigger} from 'react-bootstrap';
import User from '../../hoc/popover/user/User';
import Community from '../../hoc/popover/community/Community';
import DateToolpit from '../../hoc/popover/date/DateToolpit';
import More from '../../hoc/popover/more/More';

class Blog extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    const userPop = User();
    const commPop = Community();
    const datePop = DateToolpit();
    const morePop = More();
    return (
      <div className="AllBlogs">
        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Mount_Everest_as_seen_from_Drukair2_PLW_edit.jpg" alt="mountain"></img>
        <div className="Context">
            <h3>A California Couple Design a Master Bed from Scratch</h3>
            <p>Culpa pariatur voluptate eu pariatur ad deserunt ipsum consectetur aute. Veniam aliquip nisi voluptate aliquip pariatur. Eiusmod exercitation consectetur deserunt non quis adipisicing. Eiusmod exercitation consequat velit excepteur exercitation mollit duis eiusmod ex. Magna irure ipsum aliqua nisi proident eu sit deserunt duis laborum sunt. Dolore tempor sit nostrud qui laborum quis consectetur eiusmod ea laboris minim id velit.</p>
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
                <div className="OptionBox">
                    <BookmarkBorderIcon style={{margin:'0 8px'}} color="action" />
                    <OverlayTrigger
                      trigger={['click', 'focus']}
                      key='bottomMore'
                      placement='bottom'
                      overlay={morePop}
                      >
                    <ExpandMoreIcon color="action" style={{cursor: 'pointer'}} />
                  </OverlayTrigger>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Blog;
