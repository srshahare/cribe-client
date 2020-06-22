import React, {useEffect} from 'react';
import './Item.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import User from '../../../../hoc/popover/user/User';
import {OverlayTrigger} from 'react-bootstrap';
import DateToolpit from '../../../../hoc/popover/date/DateToolpit';

import {convertMonth} from '../../../../utils/ConvertDate';

const Item = (props) => {
    AOS.init();
    const datePop = DateToolpit();

    const {blog} = props;

    const [creator, setCreator] = React.useState(null);

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
      })
    }, [blog._id])

    return(
        <div className="CommunityBlogItem">
            <img src={blog.preview} alt={blog.title}></img>
            <div className="InfoBar">
                <div className="Bar">
                    {creator === null?
                    "":
                    <p>by 
                    <OverlayTrigger
                        trigger={['hover', 'focus']}
                        key='bottomUser'
                        placement='bottom'
                        overlay={User}
                        >
                        <span> {creator.name}</span>
                    </OverlayTrigger><span>&nbsp;|&nbsp;</span>
                    <OverlayTrigger
                        placement="bottom"
                        delay={{ show: 250, hide: 400 }}
                        overlay={datePop}
                        >
                        <span>{convertMonth(blog.createdAt)}</span>
                    </OverlayTrigger>
                    </p>
                    }
                </div>
            </div>
            <div className="Content">
                <h5>{blog.title}</h5>
                <p>{blog.description}</p>
            </div>
        </div>
    )
}

export default Item;