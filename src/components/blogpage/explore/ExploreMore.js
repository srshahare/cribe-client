import React, {useEffect} from 'react';
import './ExploreMore.css';
import {convertMonth}  from '../../../utils/ConvertDate';

const ExploreMore = (props) => {

    const {blog} = props;

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

    return(
        <div className="PageExploreMore">
            <img src={blog.preview} alt={blog.title}></img>
            <div className="BlackBack"></div>
            <div className="Content">
                <h4>{blog.title}</h4>
                {creator === null || community === null?
                "":
                <div className="CreatorInfo">
                    <img src={creator.image} alt={creator.name}></img>
                    <div>
                        <h6>{creator.name}</h6>
                        <p>{convertMonth(blog.createdAt)}</p>
                    </div>
                </div>
                }
            </div>
        </div>
    )
}

export default ExploreMore;