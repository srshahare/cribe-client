import React from 'react';
import './ExploreMore.css';

const ExploreMore = () => {
    return(
        <div className="PageExploreMore">
            <img src="https://www.spatialsource.com.au/wp-content/uploads/2020/04/marvin-meyer-SYTO3xs06fU-unsplash.jpg" alt="blog preview"></img>
            <div className="BlackBack"></div>
            <div className="Content">
                <h3>This is the brand new blog title having only 2 lines</h3>
                <div className="CreatorInfo">
                    <img src="https://www.beinspiredsalon.com/wp-content/uploads/2016/07/Kiera-Knightly-1080x675.jpg" alt="creator profile"></img>
                    <div>
                        <h4>Emilli Clara</h4>
                        <p>june 23, 2019</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExploreMore;