import React from 'react';
import './BottomSection.css';

const BottomSection = () => {

    const ActiveElement = (event) => {
        const elementId = event.target.id;
        switch(elementId){
            case 'hashtagblogs': 
                document.getElementById(elementId).classList.add('active')
                document.getElementById('hashtagtagged').classList.remove('active')
                break;
            case 'hashtagtagged': 
                document.getElementById('hashtagblogs').classList.remove('active')
                document.getElementById(elementId).classList.add('active')
                break;
            default: 
                console.log('wrong input');
        }
    }

    return(
        <div className="HashtagBottomSection">
            <div className="OptionBox">
                <div className="Options">
                    <button id="hashtagblogs" className='active' onClick={ActiveElement}>BLOGS</button>
                    <button id="hashtagtagged" className='' onClick={ActiveElement}>FOLLOWERS</button>
                </div>
                <hr></hr>
            </div>
        </div>
    )
}

export default BottomSection