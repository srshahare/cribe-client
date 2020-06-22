import React, {useEffect} from 'react';
import './Main.css';
import axios from 'axios';

import Lottie from 'react-lottie'
import animationData from '../../../assets/72-favourite-app-icon.json';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Item = (props) => {

    const {comment} = props;
    const [user, setUser] = React.useState(null);
    const {stopped, setStopped} = React.useState(true);

    const options = {
        loop: false,
        autoplay: false, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };

    useEffect(() => {
        axios.get('http://localhost:5000/me/getuser', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            },
            params: {
                userId: comment.userId
            }
        })
        .then(result => {
            setUser(result.data)
        })
    })

    return(
        <div className="CommentItem">
            {user === null ?
            "":
           <div className="TopSection">
                <img src={user.profile_image} alt={user.name}></img>
                <div>
                    <h6>{user.user_id}</h6>
                    {/* <p>{user.description}</p> */}
                </div>
            </div>
            }
            <p>{comment.comment}</p>
            <div className="Options">
                <div>
                <Lottie options={options}
                height={50}
                width={50}
                isStopped={stopped}
                />
                </div>
                <ExpandMoreIcon color='action'/>
            </div>
        </div>
    )
}

export default Item;