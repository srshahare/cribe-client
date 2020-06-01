import React from 'react';
import './SecondSection.css';

const SecondSection = () => {
    return(
        <div className="LandingComp">
            <div className="SecondSection">
                <h1>How this all works?</h1>
                <div class='warn'></div>
                <div className="Items">
                    <div className="Item">
                        <div className="One">1</div>
                        <h3>Create Account</h3>
                        <p>create your account with selection of 3 or more topics</p>
                    </div>
                    <div className="Item">
                        <div className="Two">2</div>
                        <h3>Create Community</h3>
                        <p>create your account with selection of 3 or more topics</p>
                    </div>
                    <div className="Item">
                        <div className="Three">3</div>
                        <h3>Add members</h3>
                        <p>create your account with selection of 3 or more topics</p>
                    </div>
                    <div className="Item">
                        <div className="Four">4</div>
                        <h3>Expand</h3>
                        <p>create your account with selection of 3 or more topics</p>
                    </div>
                </div>
                <button>Sign up now</button>
                {/* <img src={Bg} alt='background'></img> */}
            </div>
        </div>
    )
}

export default SecondSection;