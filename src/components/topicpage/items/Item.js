import React, {useEffect} from 'react';
import './Item.css';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { convertMonth } from '../../../utils/ConvertDate';

const Item = (props) => {

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
        <div className="TopicPageItem">
            <div className="UserContainer">
                {community === null || creator === null?
                "":
                <div className="First">
                    <img src={creator.image} alt={creator.name}></img>
                    <div>
                        <h6>{creator.name}</h6>
                        <p>{convertMonth(blog.createdAt)}</p>
                    </div>
                </div>
                }
                <div className="Second">
                    <ExpandMoreIcon color='action'/>
                </div>
            </div>
            <img src={blog.preview} alt={blog.title}></img>
            <div className="Content">
                <h5>{blog.title}</h5>
                <p>{blog.description}</p>
            </div>
        </div>
    )
}

export default Item;