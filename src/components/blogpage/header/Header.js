import React from 'react';
import './Header.css';

import FacebookIcon from '../../../assets/images/CircleColor-facebook.png'
import TwitterIcon from '../../../assets/images/CircleColor-twitter.png'
import LinkedinIcon from '../../../assets/images/CircleColor-linkedin.png'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Header = () => {
    return(
        <div className="BlogPageHeader">
            <div className="BlogHeader">
                <img src="https://lp-cms-production.imgix.net/2019-06/12dec8938220093eb7f1fdb8a9ce40b8-the-rocky-mountains.jpg?fit=crop&q=40&sharp=10&vib=20&auto=format&ixlib=react-8.6.4" alt="mountains"></img>
                <div className="BlackBack"></div>
                <div className="BlogPageTitle">
                    <div>
                        <p>June 14, 2019</p>
                        <h3>How to create a component slider with react-spring</h3>
                    </div>
                </div>
            </div>
            <div className="TitleOptions">
                <img src={TwitterIcon} alt="twitter"></img>
                <img src={LinkedinIcon} alt="linkedin"></img>
                <img src={FacebookIcon} alt="facebook"></img>
                <BookmarkBorderIcon style={{color: 'white', width: '35px', height: '35px'}} />
                <ExpandMoreIcon style={{color: 'white', width: '35px', height: '35px'}} />
            </div>
        </div>
    )
}

export default Header;