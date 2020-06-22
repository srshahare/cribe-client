import React, {useEffect} from 'react';
import './Blog.css';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {OverlayTrigger} from 'react-bootstrap';
import User from '../../../hoc/popover/user/User';
import Community from '../../../hoc/popover/community/Community';
import DateToolpit from '../../../hoc/popover/date/DateToolpit';
import More from '../../../hoc/popover/more/More';
import {convertMonth} from '../../../utils/ConvertDate';

const Blog = (props) => {

    const {blog} = props;

    const [creator, setCreator] = React.useState(null);
    const [community, setCommunity] = React.useState(null);

    const userPop = User(creator);
    const commPop = Community(community);
    const datePop = DateToolpit(blog.updatedAt);
    const morePop = More();

    useEffect(() => {
      fetch('https://thawing-reaches-88200.herokuapp.com/feed/blog/metainfo/'+blog._id, {
        method: 'GET', 
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      })
      .then(res => {
        return res.json();
      })
      .then(result => {
          setCreator(result.creator);
          setCommunity(result.community);
      })
    }, [blog._id])


    return (
      <div className="FeatureSecond">
        <img src={blog.preview} alt={blog.title}></img>
        <div className="Context">
            <h3>{blog.title}</h3>
            <div className="EndBox">
                <div className="EndBoxDesktop">
                  {creator === null || community === null?
                  "":
                  <p>by <OverlayTrigger
                      trigger={['hover', 'focus']}
                      delay={{ show: 1000, hide: 300 }}
                      key='bottomUser'
                      placement='bottom'
                      overlay={userPop}
                      >
                      <span>{creator.name} </span>
                  </OverlayTrigger><span>|</span>
                  <OverlayTrigger
                      trigger={['hover', 'focus']}
                      delay={{ show: 1000, hide: 300 }}
                      key='bottomCommunity'
                      placement='bottom'
                      overlay={commPop}
                      >
                      <span> {community.name}</span>
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
                  {creator === null || community === null?
                  "":
                  <p>
                    <span>{creator.name} </span>
                    <span>|</span>
                    <span> {community.name}</span>
                  </p>
                  }
                  <p>{convertMonth(blog.createdAt)}</p>
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
