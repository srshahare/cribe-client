import React from 'react';
import './Main.css';
import Button from '@material-ui/core/Button'
import Item from './Item';

const Main = (props) => {
    return(
        <div className="CommentMain">
          <textarea 
            onChange={props.commentChangeHandler}
            placeholder="Your comment" required></textarea>
          <Button disabled={props.disabled} onClick={props.commentSend} variant='contained'>Send</Button>
          <div className="CommentList">
            {props.commentList.map(comm => {
              return(
                <Item 
                  key={comm._id}
                  comment={comm}/>
              )
            })}
          </div>
        </div>
    )
}

export default Main;