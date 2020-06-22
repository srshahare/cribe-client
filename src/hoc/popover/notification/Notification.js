import React, {useEffect, useState} from 'react';
import './Notification.css';
import {Popover} from 'react-bootstrap';


const Notification = () => {

  const [message, setMessage] = useState(null);
  const [notis, setNotis] = useState(null);
  
  useEffect(() => {
    fetch('https://thawing-reaches-88200.herokuapp.com/me/notifications/all', {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    })
    .then(res => {
      return res.json();
    })
    .then(result => {
      console.log(result)
      setNotis(result);
    })
  }, [])


    return(
      <Popover id={`popover-positioned-bottom`} className="NotificationPopover">
        <Popover.Content>
          {notis === null?
          "":
          <div>
            <h6>All Notification</h6>
            {notis.map(not => {
              return(
                <div className="Notification">
                  <div className="Content">
                    <img className="UserImg" src={not.images.senderImg} alt={not.message}></img>
                    <p>{not.message}</p>
                  </div>
                  <img className="BlogImg" src={not.images.blogImg} alt={not.message}></img>
                </div>
              )
            })}
          </div>
          }
        </Popover.Content>
      </Popover>
    )
}

export default Notification;