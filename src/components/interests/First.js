import React from 'react';
import './First.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const First = () => {
    AOS.init();

    return(
        <div className="InterestsFirst" data-aos="fade-up">
            <h1>Personalize your interests</h1>
            <p>Sit aliqua id cupidatat aliquip pariatur qui occaecat in. Consequat deserunt do irure pariatur qui. Lorem nulla aute </p>
        </div>
    )
}

export default First;