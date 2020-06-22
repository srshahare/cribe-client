import React from 'react';
import './Community.css';
import {Popover} from 'react-bootstrap';


export default function User(community = null) {
    return(
        <Popover id={`popover-positioned-bottom`} className="CommunityPopover">
            <div>
                {community === null?
                "":
                <Popover.Content className="PopContent">
                    <div className="CreatorContent">
                        <img src={community.preview} alt={community.name}></img>
                        <div>
                            <h5>{community.name}</h5>
                            <p>12 members, {community.followers} followers</p>
                        </div>
                    </div>
                    <p className="CommunityBio">{community.desc}</p>
                </Popover.Content>
                }
            </div>
        </Popover>
    )
}
