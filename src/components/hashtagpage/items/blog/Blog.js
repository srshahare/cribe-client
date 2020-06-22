import React from 'react';
import './Blog.css';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {OverlayTrigger} from 'react-bootstrap';
import Community from '../../../../hoc/popover/community/Community';
import DateToolpit from '../../../../hoc/popover/date/DateToolpit';
import More from '../../../../hoc/popover/more/More';

import { convertMonth } from '../../../../utils/ConvertDate';

const Blog = (props) => {
    const commPop = Community();
    const datePop = DateToolpit();
    const morePop = More();

    const {blog} = props;

    return (
      <div className="HashtagBlogItem">
        <img src={blog.preview} alt={blog.title}></img>
        <div className="Context">
            <h5>{blog.title}</h5>
            <div className="EndBox">
                <div className="EndBoxDesktop">
                    {blog.community.name === 'Individual' ?
                    <p>Published Individually</p>:
                  <p>In
                  <OverlayTrigger
                      trigger={['hover', 'focus']}
                      delay={{ show: 1000, hide: 300 }}
                      key='bottomCommunity'
                      placement='bottom'
                      overlay={commPop}
                      >
                      <span> {blog.community.name}</span>
                  </OverlayTrigger>
                  </p>
                    }
                  <OverlayTrigger
                    placement="bottom"
                    delay={{ show: 250, hide: 400 }}
                    overlay={datePop}
                    >
                    <p>{convertMonth(blog.createdAt)}</p>
                  </OverlayTrigger>
                </div>
                <div className="EndBoxMobile">
                  <p>In
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

export default Blog;
