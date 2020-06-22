import React, {useEffect} from 'react';
import './Item.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';

const Item = (props) => {
    AOS.init();
    const {member} = props;

    const [name, setName] = React.useState('');
    const [bio, setBio] = React.useState('');
    const [image, setImage] = React.useState('');

    useEffect(() => {
        axios.get('https://thawing-reaches-88200.herokuapp.com/me/getuser', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            },
            params: {
                userId: member
            }
        })
        .then(res => {
            setName(res.data.name);
            setBio(res.data.bio);
            setImage(res.data.profile_image);
        })
    }, [member])
    

    return(
        <div className="CommunityMemberItem">
            <img src={image} alt={name}></img>
            <div className="Content">
                <h5>{name}</h5>
                <p>{bio}</p>
            </div>
        </div>
    )
}

export default Item;