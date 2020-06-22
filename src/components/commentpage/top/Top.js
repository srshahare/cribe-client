import React from 'react';
import './Top.css';
import Avatar from '@material-ui/core/Avatar'
import {convertMonth} from '../../../utils/ConvertDate';

const Top = (props) => {
    const {blog, creator} = props;
    return(
        <div className="CommentTop">
            <div className="TopSection">
                <img src={blog.preview} alt={blog.title}></img>
                <div>
                    <h3>{blog.title}</h3>
                    <p>{blog.description}</p>
                </div>
            </div>
            <div className="UserSection">
                <Avatar src={creator.image} alt={creator.name}></Avatar>
                <div>
                    <h6>{creator.name}</h6>
                    <p>{convertMonth(blog.createdAt)}</p>
                </div>
            </div>
        </div>
    )
}

export default Top;