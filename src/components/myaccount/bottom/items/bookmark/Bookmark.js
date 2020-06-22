import React from 'react';
import './Bookmark.css';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {OverlayTrigger} from 'react-bootstrap';
import User from '../../../../../hoc/popover/user/User';
import Community from '../../../../../hoc/popover/community/Community';
import DateToolpit from '../../../../../hoc/popover/date/DateToolpit';
import More from '../../../../../hoc/popover/more/More';

const Bookmark = (props) => {
  const commPop = Community();
  const datePop = DateToolpit();
  const morePop = More();

  const { bookmark } = props;

  return (
    <div className="BookmarkItem">
      <img src={bookmark.preview} alt="mountain"></img>
      <div className="Context">
          <div style={{cursor: 'pointer'}} onClick={props.openBookmarkPage}>
            <h3>{bookmark.title}</h3>
          </div>
          <div className="EndBox">
              <div className="EndBoxDesktop">
                <p>by <OverlayTrigger
                    trigger={['hover', 'focus']}
                    key='bottomUser'
                    placement='bottom'
                    overlay={User}
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
              <div className="EndBoxMobile">
                <p>
                  <span>Allison Fox </span>
                  <span>|</span>
                  <span> Cramp stories</span>
                </p>
                <p>May 13, 2019</p>
              </div>
              <div className="OptionBox">
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

export default Bookmark;
