import React from 'react';
import './Bottom.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Bottom = () => {
    AOS.init();

    return(
        <div className="StatisticsBottom" data-aos="fade">
            <h3>Blogs</h3>
        </div>
    )
}

export default Bottom;