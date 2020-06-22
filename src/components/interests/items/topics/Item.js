import React, {useEffect} from 'react';
import './Item.css'
import Add from '../../../../assets/images/add_icon.png';
import Added from '../../../../assets/images/added_icon.png';

const Item = (props) => {
    const {topic, me} = props;

    const [add, setAdd] = React.useState(false);

    const addTopic = () => {
        setAdd(true)
        fetch('https://thawing-reaches-88200.herokuapp.com/me/interest/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify({
                topicId: topic._id
            })
        })
        .then(res => {
            return res.json();
        })
        .then(result => {
            console.log(result)
        })
    }
    const removeTopic = () => {
        setAdd(false)
        fetch('https://thawing-reaches-88200.herokuapp.com/me/interest/remove', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify({
                topicId: topic._id
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
        if(me.interests.includes(topic._id)){
            setAdd(true)
        }
    }, [me])

    return(
        <div className="InterestTopicItem">
            <img src={topic.preview} alt={props.name}></img>
            <div className="Content">
                <h5>{topic.name}</h5>
                {add?
                <img onClick={removeTopic} src={Added} alt="added icon" className="Icon" />:
                <img onClick={addTopic} src={Add} alt="add icon" className="Icon" />
                }
            </div>
        </div>
    )
}

export default Item;