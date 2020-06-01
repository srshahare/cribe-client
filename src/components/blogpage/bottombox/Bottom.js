import React from 'react';
import './Bottom.css';

import Like from '../../../assets/images/likeoutline.png';
// import Liked from '../../../assets/images/likefilled.png';
import Facebook from '../../../assets/images/CircleColor-facebook.png';
import LinkedIn from '../../../assets/images/CircleColor-linkedin.png';
import Twitter from '../../../assets/images/CircleColor-twitter.png';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Bottom = () => {
    return(
        <div className="PageBottomBox">
            <div className="FirstSection">
                <img src={Like} alt="like blog"></img>
                <button>All Comments</button>
                <div className="OptionBox">
                    <img src={Twitter} alt="twitter"></img>
                    <img src={LinkedIn} alt="linkedin"></img>
                    <img src={Facebook} alt="facebook"></img>
                    <BookmarkBorderIcon color="action" style={{margin: "0 4px", width: '35px', height: '35px'}} />
                    <ExpandMoreIcon color="action" style={{margin: "0 4px", width: '35px', height: '35px'}} />
                </div>
            </div>
            <p>12k likes and 453 comments</p>
            <h2>Creator</h2>
            <div className="SecondSection">
                <img src="https://content2.latest-hairstyles.com/wp-content/uploads/versatile-textured-pixie-short-round-face.jpg" alt="creator profile"></img>
                <div className="CreatorInfo">
                    <h3>User Name</h3>
                    <p>In nostrud eu fugiat commodo qui fugiat. Excepteur elit exercitation non ut dolore et. Nisi nisi deserunt cillum sit. Dolor cillum elit ut nisi cupidatat aliquip.</p>
                </div>
                <button>Follow</button>
            </div>
            <h2>Community</h2>
            <div className="ThirdSection">
                <img src="https://artdriver.com/wp-content/uploads/2019/02/top-7-careers-for-tech-lovers-it.jpg" alt="community profile"></img>
                <div className="CreatorInfo">
                    <h3>Community Name</h3>
                    <p>In nostrud eu fugiat commodo qui fugiat. Excepteur elit exercitation non ut dolore et. Nisi nisi deserunt cillum sit. Dolor cillum elit ut nisi cupidatat aliquip.</p>
                </div>
                <button>Follow</button>
            </div>
        </div>
    )
}

export default Bottom;