import React, {useEffect} from 'react';
import './Recommend.css';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {OverlayTrigger} from 'react-bootstrap';
import User from '../../hoc/popover/user/User';
import Community from '../../hoc/popover/community/Community';
import DateToolpit from '../../hoc/popover/date/DateToolpit';
import More from '../../hoc/popover/more/More';

const Recommend = (props) => {

  const {blog} = props;

    const userPop = User();
    const commPop = Community();
    const datePop = DateToolpit();
    const morePop = More();

    const [creator, setCreator] = React.useState(null);
    const [community, setCommunity] = React.useState(null);

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
      <div className="RecommendBlogs">
        <div className="CountBox">
            <h3 className="Count">0{props.count}</h3>
        </div>
        <div className="Context">
            <h3>{blog.title}</h3>
            <div className="EndBox">
                <div className="EndBoxDesktop">
                  {creator === null || community === null?
                  "":
                  <p>by <OverlayTrigger
                      trigger={['hover', 'focus']}
                      key='bottomUser'
                      placement='bottom'
                      overlay={userPop}
                      >
                      <span>{creator.name} </span>
                  </OverlayTrigger><span>|</span>
                  <OverlayTrigger
                      trigger={['hover', 'focus']}
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

export default Recommend;
