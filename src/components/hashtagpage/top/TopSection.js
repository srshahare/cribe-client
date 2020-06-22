import React from 'react';
import './TopSection.css';
import Avatar from '@material-ui/core/Avatar';

import { NavLink } from 'react-router-dom';

const TopSection = (props) => {

    const { page } = props;

    const convertMonth = () => {
        var date = new Date(page.createdAt);  // dateStr you get from mongodb
        let d = date.getDate();
        let m = date.getMonth()+1;
        let y = date.getFullYear();
        switch(m){
            case 1:
                return "Jan "+d+", " + y;
            case 2:
                return "Fab "+d+", " + y;
            case 3:
                return "March "+d+", " + y;
            case 4:
                return "April "+d+", " + y;
            case 5:
                return "May "+d+", " + y;
            case 6:
                return "June "+d+", " + y;
            case 7:
                return "July "+d+", " + y;
            case 8:
                return "Aug "+d+", " + y;
            case 9:
                return "Sep "+d+", " + y;
            case 10:
                return "Oct "+d+", " + y;
            case 11:
                return "Nov "+d+", " + y;
            case 12:
                return "Dec "+d+", " + y;
            default:
                return "Date"
        }
    }

    return(
        <div className="HashtagSection">
            <div className="ProfileImgDiv">
                <Avatar className="ProfileImg"><h1>#</h1></Avatar>
            </div>
            <div className="AccountDetails">
                <div className="AccountName">
                    <h2>{page.name}</h2>
                    <NavLink to="/">Delete Hashtag</NavLink>
                </div>
                <p><span> {page.blogs.length} </span>Blogs&nbsp;&nbsp;&nbsp;&nbsp;
                    <span> {page.followers.length} </span>followers
                </p>
                <h6 className="JoiningText">Created on {convertMonth()}</h6>
                <NavLink to="/">Delete Hashtag</NavLink>
            </div>
        </div>
    )
}

export default TopSection