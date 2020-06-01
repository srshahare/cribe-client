import React from 'react';
import FirstImg from '../../assets/images/firstsection.svg'
import './FirstSection.css';

const FirstSection = (props) => {
    return(
        <div className="LandingComp">
            <div className="FirstSection">
                <div className="LeftContainer">
                    <h1>Share what you know</h1>
                    <p>Elit quis pariatur pariatur aute esse labore qui ipsum duis Lorem. Ea quis incididunt velit labore irure Lorem irure nulla voluptate cupidatat officia. Eu quis in id esse.</p>
                    <button onClick={props.getStarted}>Get Started</button>
                </div>
                <div className="RightContainer">
                    <img src={FirstImg} alt="first landing page"></img>      
                </div>
            </div>
        </div>
    )
}

export default FirstSection;