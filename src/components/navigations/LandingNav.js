import React from 'react';
import './Navigation.css'
import Brand from '../../assets/images/brand.jpg';

import MenuIcon from '@material-ui/icons/Menu';

const LandingNav = () => {

    const showDropMenu = () => {
        document.getElementById("myDropdown").classList.toggle("show");
    }

    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
          var dropdowns = document.getElementsByClassName("dropdown-content");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
          }
        }
    }

    return(
        <div className="LandingNav">
            <img src={Brand} alt="brand logo"></img>
            <div id="myDropdown" className="ItemsContainer">
                <p>Subscribe</p>
                <p>Sign In</p>
                <button>Get Started</button>
            </div>
            <div className="dropbtn">
                <MenuIcon onClick={showDropMenu} />
            </div>
        </div>
    )
}

export default LandingNav;