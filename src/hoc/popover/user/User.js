import React from 'react';
import './User.css';
import {Popover} from 'react-bootstrap';


const User = () => {
    return(
        <Popover id={`popover-positioned-bottom`}>
            <div className="UserPopover">
                <Popover.Content className="PopContent">
                    <div className="CreatorContent">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4SG3lVK1nhiLCeTWMUIo7_zVGv0dy0gqted31IScp-953Boiz&usqp=CAU" alt="creator profile"></img>
                        <div>
                            <h5>Micheal Wazniak</h5>
                            <p>Followed by 2.5k people</p>
                        </div>
                    </div>
                    <p className="UserBio">Enim ex et occaecat dolore sint. Ullamco exercitation esse commodo pariatur ex ex enim duis do fugiat ut velit. Nisi labore mollit consequat veniam consequat officia eiusmod. Cillum magna est non laboris commodo labore et sit mollit duis ullamco elit magna veniam. Fugiat ipsum officia exercitation adipisicing reprehenderit nulla tempor sunt.</p>
                </Popover.Content>
            </div>
        </Popover>
    )
}

export default User;