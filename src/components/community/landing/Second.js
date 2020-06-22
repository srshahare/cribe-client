import React from 'react';
import './Second.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Second = () => {
    AOS.init();

    return(
        <div className="CommunityLandSecond">
            <h1>How does it work</h1>
            <div className="LeftBlock" data-aos="fade-right" data-aos-delay="0">
                <h3>Create your Community</h3>
                <h2>1</h2>
            </div>
            <div className="RightBlock" data-aos="fade-left" data-aos-delay="200">
                <h2>2</h2>
                <h3>Add members there</h3>
            </div>
            <div className="LeftBlock" data-aos="fade-right" data-aos-delay="400">
                <h3>Publish blogs within the community</h3>
                <h2>3</h2>
            </div>
            <div className="RightBlock" data-aos="fade-left" data-aos-delay="600">
                <h2>4</h2>
                <h3>Expand your audiance</h3>
            </div>
        </div>
    )
}

export default Second;