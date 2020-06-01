import React from 'react';
import './More.css';
import {Popover} from 'react-bootstrap';


const More = () => {
    return(
        <Popover id={`popover-positioned-bottom`} className="MorePopover">
            <ul>
                <li>Mute Community</li>
                <li>Mute Creator</li>
            </ul>
        </Popover>
    )
}

export default More;