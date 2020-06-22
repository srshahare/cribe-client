import React, {useEffect} from 'react';
import './Community.css'

const Community = (props) => {

    const {community, me} = props;

    const [follow, setFollow] = React.useState(false);

    const addFollow = () => {
        setFollow(true);
        fetch('https://thawing-reaches-88200.herokuapp.com/me/community/follow', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify({
                commId: community._id
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
        fetch('https://thawing-reaches-88200.herokuapp.com/me/community/unfollow', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify({
                commId: community._id
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
        if(me.followings.includes(community._id)){
            setFollow(true)
        }
    }, [me])

    return(
        <div className="InterestCommItem">
            <img src={community.preview} alt={community.name}></img>
            <div className="Content">
                <h5>{community.name}</h5>
                <p>{community.description}</p>
            </div>
            {follow?
                <button onClick={removeFollow} className="Following">Following</button>:
                <button onClick={addFollow} className="Follow">Follow</button>
            }
        </div>
    )
}

export default Community;