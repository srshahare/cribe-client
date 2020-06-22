import React, {useEffect} from 'react';
import './Blog.css';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import {OverlayTrigger} from 'react-bootstrap';
import User from '../../hoc/popover/user/User';
import Community from '../../hoc/popover/community/Community';
import DateToolpit from '../../hoc/popover/date/DateToolpit';
import More from '../../hoc/popover/more/More';

import { convertMonth } from '../../utils/ConvertDate';

const Blog = (props) => {
  const { blog, bookmarks} = props;

  const [booked, setBook] = React.useState(false);
  const [creator, setCreator] = React.useState(null);
  const [community, setCommunity] = React.useState(null);

  const userPop = User(creator);
  const commPop = Community(community);
  const datePop = DateToolpit(blog.updatedAt);
  const morePop = More();


  const bookClicked = () => {
    setBook(true);
    fetch('http://localhost:5000/feed/blog/bookmark/add', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token')
      },
      body: JSON.stringify({
        blogId: blog._id
      })
    })
    .then(res => {
      return res.json();
    })
    .then(result => {
      console.log(result.message)
    })
  }
  const unBookClicked = () => {
    setBook(false);
    fetch('http://localhost:5000/feed/blog/bookmark/remove', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token')
      },
      body: JSON.stringify({
        blogId: blog._id
      })
    })
    .then(res => {
      return res.json();
    })
    .then(result => {
      console.log(result.message)
    })
  }

  useEffect(() => {
    if(bookmarks.includes(blog._id)){
      setBook(true)
    }
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
    <div className="AllBlogs">
      <img src={blog.preview} alt="mountain"></img>
      <div className="Context">
          <div style={{cursor: 'pointer'}} onClick={props.openBlogPage}>
            <h3>{blog.title}</h3>
            <p>{blog.description}</p>
          </div>
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
                </OverlayTrigger>
                <span>|</span>
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
                  delay={{ show: 500, hide: 500 }}
                  overlay={datePop}
                  >
                  <p>{convertMonth(blog.createdAt)}</p>
                </OverlayTrigger>
              </div>
              <div className="EndBoxMobile">
                {creator === null || community === null?
                "":
                <p>
                  <span>{creator.userId} </span>
                  <span>|</span>
                  <span> {community.name}</span>
                </p>
                }
                <p>{convertMonth(blog.createdAt)}</p>
              </div>
              <div className="OptionBox">
                {
                  booked?
                  <BookmarkIcon onClick={unBookClicked} style={{margin:'0 8px', cursor: 'pointer'}} />:
                  <BookmarkBorderIcon onClick={bookClicked} style={{margin:'0 8px', cursor: 'pointer'}} color="action" />
                }
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
