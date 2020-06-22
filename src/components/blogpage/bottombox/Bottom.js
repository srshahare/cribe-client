import React, {useEffect, useState, Fragment} from 'react';
import './Bottom.css';

import Like from '../../../assets/images/likeoutline.png';
// import Liked from '../../../assets/images/likefilled.png';
import Facebook from '../../../assets/images/CircleColor-facebook.png';
import LinkedIn from '../../../assets/images/CircleColor-linkedin.png';
import Twitter from '../../../assets/images/CircleColor-twitter.png';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Lottie from 'react-lottie'
import animationData from '../../../assets/72-favourite-app-icon.json';
import RatingBar from './RatingBar';
import {useHistory} from 'react-router-dom';

const Bottom = (props) => {
    const history = useHistory();

    const {creator, community, me, blogId, blog} = props;

    const [follow, setFollow] = useState(false);
    const [followComm, setFollowComm] = useState(false);

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

    const addFollowComm = () => {
        setFollowComm(true);
        fetch('https://thawing-reaches-88200.herokuapp.com/me/community/follow', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify({
                commId: community.uid
            })
        })
        .then(res => {
            return res.json();
        })
        .then(result => {
            console.log(result)
        })
    }
    const removeFollowComm = () => {
        setFollowComm(false);
        fetch('https://thawing-reaches-88200.herokuapp.com/me/community/unfollow', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify({
                commId: community.uid
            })
        })
        .then(res => {
            return res.json();
        })
        .then(result => {
            console.log(result)
        })
    }

    useEffect(() => {
        if(me.followings.includes(creator.uid)){
            setFollow(true)
        }
        if(me.followings.includes(community.uid)){
            setFollowComm(true)
        }
    }, [me])

    const goToCommentPage = () => {
        history.push('/cribe-client/comment/'+blogId)
    }

    return(
        <div className="PageBottomBox">
            <div className="FirstSection">
                <RatingBar blogId={blogId}/>
                <button onClick={goToCommentPage}>All Comments</button>
                <div className="OptionBox">
                    <img src={Twitter} alt="twitter"></img>
                    <img src={LinkedIn} alt="linkedin"></img>
                    <img src={Facebook} alt="facebook"></img>
                    <BookmarkBorderIcon color="action" style={{margin: "0 4px", width: '30px', height: '30px'}} />
                    <ExpandMoreIcon color="action" style={{margin: "0 4px", width: '30px', height: '30px'}} />
                </div>
            </div>
            <p>0 likes and 0 comments</p>
            <h2>Creator</h2>
            <div className="SecondSection">
                <img src={creator.image} alt={creator.name}></img>
                <div className="CreatorInfo">
                    <h3>{creator.name}</h3>
                    <p>{creator.bio}</p>
                </div>
                {me._id === creator.uid?
                "":
                <Fragment>
                    {follow?
                    <button onClick={removeFollow} className="Following">Following</button>:
                    <button onClick={addFollow} className="Follow">Follow</button>
                    }
                </Fragment>
                }
            </div>
            <h2>Community</h2>
            <div className="ThirdSection">
                <img src={community.preview} alt={community.name}></img>
                <div className="CreatorInfo">
                    <h3>{community.name}</h3>
                    <p>{community.desc}</p>
                </div>
                {followComm?
                <button onClick={removeFollowComm} className="Following">Following</button>:
                <button onClick={addFollowComm} className="Follow">Follow</button>
                }
            </div>
        </div>
    )
}

export default Bottom;