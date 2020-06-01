import React from 'react';
import './BottomSection.css';

const BottomSection = () => {
    
    let classTags = ['active'];

    const ActiveElement = (event) => {
        const elementId = event.target.id;
        switch(elementId){
            case 'accountblogs': 
                document.getElementById(elementId).classList.add('active')
                document.getElementById('accountbookmark').classList.remove('active')
                document.getElementById('accounttagged').classList.remove('active')
                break;
            case 'accountbookmark': 
                document.getElementById('accountblogs').classList.remove('active')
                document.getElementById(elementId).classList.add('active')
                document.getElementById('accounttagged').classList.remove('active')
                break;
            case 'accounttagged': 
                document.getElementById('accountblogs').classList.remove('active')
                document.getElementById('accountbookmark').classList.remove('active')
                document.getElementById(elementId).classList.add('active')
                break;
            default: 
                console.log('wrong input');
        }
        console.log(classTags.join(' '))
    }

    return(
        <div className="AccountBottomSection">
            <div className="OptionBox">
                <div className="Options">
                    <button id="accountblogs" className='active' onClick={ActiveElement}>BLOGS</button>
                    <button id="accountbookmark" className='' onClick={ActiveElement}>BOOKMARKED</button>
                    <button id="accounttagged" className='' onClick={ActiveElement}>TAGGED</button>
                </div>
                <hr></hr>
            </div>
        </div>
    )
}

export default BottomSection