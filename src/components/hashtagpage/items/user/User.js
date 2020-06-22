import React, {useEffect} from 'react';
import './User.css'

const User = (props) => {
    const {user, me} = props;

    const [follow, setFollow] = React.useState(false);

    const addFollow = () => {
        setFollow(true);
        fetch('https://thawing-reaches-88200.herokuapp.com/me/user/follow', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify({
                userId: user._id
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
                userId: user._id
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
        if(me.followings.includes(user._id)){
            setFollow(true)
        }
    }, [me])

    return(
        <div className="HashtagUserItem">
            <img src={user.profile_image} alt={user.name}></img>
            <div className="Content">
                <h5>{user.name}</h5>
                <p>{user.bio}</p>
            </div>
            {follow?
                <button onClick={removeFollow} className="Following">Following</button>:
                <button onClick={addFollow} className="Follow">Follow</button>
            }
        </div>
    )
}

export default User;