import React, {useEffect, useState, Fragment} from 'react';
import './PageContent.css';
import TrendingBlogs from '../../trendings/TrendingBlogs';

import Grid from '@material-ui/core/Grid';

import Facebook from '../../../assets/images/CircleColor-facebook.png';
import LinkedIn from '../../../assets/images/CircleColor-linkedin.png';
import Twitter from '../../../assets/images/CircleColor-twitter.png';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const PageContent = (props) => {

    const {blogContent, creator, me} = props;

    const [follow, setFollow] = useState(false);

    const addFollow = () => {
        setFollow(true);
        fetch('https://thawing-reaches-88200.herokuapp.com/me/user/follow', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify({
                userId: creator.uid
            })
        })
        .then(res => {
            return res.json();
        })
        .then(result => {
            console.log(result)
        })
    }
    const removeFollow = () => {
        setFollow(false);
        fetch('https://thawing-reaches-88200.herokuapp.com/me/user/unfollow', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify({
                userId: creator.uid
            })
        })
        .then(res => {
            return res.json();
        })
        .then(result => {
            console.log(result)
        })
    }

    return(
        <div className="BlogPageContent">
            <Grid container spacing={3}>
                <Grid item xs={8}>
                    <div className="SecondSection">
                        <img src={creator.image} alt={creator.name}></img>
                        <div className="CreatorInfo">
                            <h3>{creator.name}</h3>
                            <p>Followed by {creator.followers} followers</p>
                        </div>
                        <div className="OptionBox">
                            <img src={Twitter} alt="twitter"></img>
                            <img src={LinkedIn} alt="linkedin"></img>
                            <img src={Facebook} alt="facebook"></img>
                            <BookmarkBorderIcon color="action" style={{margin: "0 4px", width: '30px', height: '30px'}} />
                            <ExpandMoreIcon color="action" style={{margin: "0 4px", width: '30px', height: '30px'}} />
                        </div>
                    </div>
                    <div className="BlogContent">
                        {blogContent.map((content, i) => {
                            return(
                                <div key={i}>
                                    {content}
                                </div>
                            )
                        })}
                     </div>
                </Grid>
                <Grid item xs={4}>
                        <h3>Trending Blogs</h3>
                        {/* <TrendingBlogs /> */}
                </Grid>
            </Grid>
        </div>
    )
}

export default PageContent;