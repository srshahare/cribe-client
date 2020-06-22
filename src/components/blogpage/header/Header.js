import React from 'react';
import './Header.css';

import FacebookIcon from '../../../assets/images/CircleColor-facebook.png'
import TwitterIcon from '../../../assets/images/CircleColor-twitter.png'
import LinkedinIcon from '../../../assets/images/CircleColor-linkedin.png'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Header = (props) => {

    const { preview, title } = props.blog;

    return(
        <div className="BlogPageHeader">
            <div className="BlogHeader">
                <img src={preview} alt={title}></img>
                <div className="BlackBack"></div>
                <div className="BlogPageTitle">
                    <div>
                        <p>June 14, 2019</p>
                        <h3>{title}</h3>
                    </div>
                </div>
            </div>
            <div className="TitleOptions">
                <img src={TwitterIcon} alt="twitter"></img>
                <img src={LinkedinIcon} alt="linkedin"></img>
                <img src={FacebookIcon} alt="facebook"></img>
                <BookmarkBorderIcon style={{color: 'white', width: '30px', height: '30px', cursor: 'pointer'}} />
                <ExpandMoreIcon style={{color: 'white', width: '30px', height: '30px', cursor: 'pointer'}} />
            </div>
        </div>
    )
}

export default Header;