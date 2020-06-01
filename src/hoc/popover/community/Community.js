import React from 'react';
import './Community.css';
import {Popover} from 'react-bootstrap';


const Community = () => {
    return(
        <Popover id={`popover-positioned-bottom`}>
            <div className="CommunityPopover">
                <Popover.Content className="PopContent">
                    <div className="CreatorContent">
                        <img src="https://daqxzxzy8xq3u.cloudfront.net/wp-content/uploads/2019/04/30123219/react-router-dom-feature-img.jpg" alt="community profile"></img>
                        <div>
                            <h5>React Programmers</h5>
                            <p>12 members, 43k followers</p>
                        </div>
                    </div>
                    <p className="CommunityBio">Enim ex et occaecat dolore sint. Ullamco exercitation esse commodo pariatur ex ex enim duis do fugiat ut velit. Nisi labore mollit consequat veniam consequat officia eiusmod. Cillum magna est non laboris commodo labore et sit mollit duis ullamco elit magna veniam. Fugiat ipsum officia exercitation adipisicing reprehenderit nulla tempor sunt.</p>
                </Popover.Content>
            </div>
        </Popover>
    )
}

export default Community;