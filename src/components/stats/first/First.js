import React from 'react';
import './First.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const First = () => {
    AOS.init();

    return(
        <div className="StatisticFirst" data-aos="fade-up">
            <h1>Statistics</h1>
            <p>Minim in tempor nulla in tempor nulla anim et ipsum pariatur anim et ipsum pariatur.</p>

            <div className="Container">
                <div className="Item">
                    <p>Earning</p>
                    <h3>344$</h3>
                </div>
                <div className="Item">
                    <p>Comments</p>
                    <h3>54</h3>
                </div>
                <div className="Item">
                    <p>Views</p>
                    <h3>44k</h3>
                </div>
                <div className="Item">
                    <p>Likes</p>
                    <h3>1.3K</h3>
                </div>
            </div>
        </div>
    )
}

export default First;