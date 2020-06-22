
import React from 'react';
import './User.css';
import {Popover} from 'react-bootstrap';

export default function User(creator = null) {
    return(
    <Popover id={`popover-positioned-bottom`} className="UserPopover">
        <div>
            {creator === null?
            "":
            <Popover.Content className="PopContent">
                <div className="CreatorContent">
                    <img src={creator.image} alt={creator.name}></img>
                    <div>
                        <h5>{creator.name}</h5>
                        <p>Followed by {creator.followers} people</p>
                    </div>
                </div>
                <p className="UserBio">{creator.bio}</p>
            </Popover.Content>
            }
        </div>
    </Popover>
    );
}
