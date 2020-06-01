import React from 'react';
import MembershipImg from '../../assets/images/thirdsection.svg'
import EarnImg from '../../assets/images/earnmoney.svg'
import CommunityImg from '../../assets/images/community.svg'
import './ThirdSection.css';

const ThirdSection = () => {
    return(
        <div className="LandingComp">
            <div className="ThirdSection">
                <div className="First">
                    <div className="LeftContainer">
                        <p>Subscribe to our</p>
                        <h1 className="Title">Membership</h1>
                        <div className="Membership">
                            <p className="TagPara">Featured blogs</p>
                            <p>Read all the featured blogs from our premium bloggers.</p>
                            <br></br>
                            <p className="TagPara">No Advertisement</p>
                            <p>Just focus on reading without any interruptions</p>
                            <br></br>
                            <p className="TagPara">Promotion</p>
                            <p>Reach out people easily by promoting the blogs</p>
                            <br></br>
                        </div>
                        <button>Subscribe</button>
                    </div>
                    <div className="RightContainer">
                        <img src={MembershipImg} alt="first landing page"></img>      
                    </div>
                </div><br></br><br></br><br></br>   
                <div className="Second">
                    <div className="RightContainer">
                        <img src={EarnImg} alt="first landing page"></img>      
                    </div>
                    <div className="LeftContainer">
                        <p>share your stories and start</p>
                        <h1 className="Title">Earning</h1>
                        <div className="Membership">
                            <p className="TagPara">Premium badge</p>
                            <p>Reach 1k followers to get premium badge</p>
                            <br></br>
                            <p className="TagPara">Earn</p>
                            <p>More you share your blogs more your will earn money</p>
                            <br></br>
                            <p className="TagPara">Free Access</p>
                            <p>Get free access for lifetime once you get your premium badge</p>
                            <br></br>
                        </div>
                    </div>
                </div><br></br><br></br><br></br>
                <div className="Third">
                    <div className="LeftContainer">
                        <p>reach to maximum audience by creating</p>
                        <h1 className="Title">Community</h1>
                        <div className="Membership">
                            <p className="TagPara">Expand audience</p>
                            <p>Create your community and expand the audience base</p>
                            <br></br>
                            <p className="TagPara">Free access</p>
                            <p>Free access for the featured community members</p>
                            <br></br>
                            <p className="TagPara">Members</p>
                            <p>Add upto 30 members and rock</p>
                            <br></br>
                        </div>
                    </div>
                    <div className="RightContainer">
                        <img src={CommunityImg} alt="first landing page"></img>      
                    </div>
                </div>
                <br></br><br></br><br></br>
            </div>
        </div>
    )
}

export default ThirdSection;