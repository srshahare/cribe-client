import React from 'react';
import './First.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Item from './item/Item';

const First = (props) => {
    AOS.init();

    const {name, preview, description, members, followers, admin} = props.page;
    const { me } = props;

    return(
        <div className="CommunityMainFirst">
            <div className="Container">
                <div className="PrallaxDiv" 
                    style={{background: `url(${preview})`,
                    backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}></div>
                <div className="BlackBack"></div>
                <h5 className="MemberTitle">Our Members</h5>
                <div className="MemberContainer">
                    {members.map((member, i) => {
                        return <Item 
                            key={member}
                            member={member}/>
                    })}
                </div>
                <div className="TitleContent" data-aos="fade-up">
                    <h1>{name}</h1>
                    <p>{description}</p>
                    {me._id === admin ?
                    <div>               
                        <button className="Outlined">Setting</button>
                    </div>:
                    <div>
                        {findCommonElements(me.followings, followers)?
                        <button className="Outlined">Following</button>:
                        <button>Follow</button>
                        }
                        {findCommonElements(me.member_of, members)?
                        <button className="Outlined">Member</button>:
                        <button>Join</button>
                        }
                    </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default First;

function findCommonElements(arr1, arr2) { 
    return arr1.some(item => arr2.includes(item)) 
} 