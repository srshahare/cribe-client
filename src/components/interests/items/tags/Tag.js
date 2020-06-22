import React, {useEffect} from 'react';
import './Tag.css'

import Avatar from '@material-ui/core/Avatar'

const Tag = (props) => {

    const {hashtag, me} = props;

    const [follow, setFollow] = React.useState(false);

    const addFollow = () => {
        setFollow(true);
        fetch('https://thawing-reaches-88200.herokuapp.com/me/tag/follow', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify({
                tagId: hashtag._id
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
        fetch('https://thawing-reaches-88200.herokuapp.com/me/tag/unfollow', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify({
                tagId: hashtag._id
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
        if(me.followings.includes(hashtag._id)){
            setFollow(true)
        }
    }, [me])
    return(
        <div className="InterestTagItem">
            <Avatar alt={hashtag.name}>#</Avatar>
            <div className="Content">
                <h6>{hashtag.name}</h6>
                <p>{hashtag.followers.length} followers</p>
            </div>
            {follow?
                <button onClick={removeFollow} className="Following">Following</button>:
                <button onClick={addFollow} className="Follow">Follow</button>
            }
        </div>
    )
}

export default Tag;