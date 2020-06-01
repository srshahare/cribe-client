import React from "react";
import './Signup.css'

import EmailIcon from '@material-ui/icons/Email';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
// import VisibilityIcon from '@material-ui/icons/Visibility';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Facebook from '../../../assets/images/facebook_icon.png';
import Twitter from '../../../assets/images/twitter_icon.png';
import Google from '../../../assets/images/google_icon.png';
import SignupImage from '../../../assets/images/login.svg';
import CloseIcon from '@material-ui/icons/Close';

const Signup = (props) => {
    return (
        <div className='SignupComponent'>
          <CloseIcon onClick={props.closeAuth} className="CloseIcon" />
          <div className="InputContainer">
              <div className="UserNameInput">
                  <AccountCircleIcon className="AccountIcon" style={{color: "#D1D1D1"}}/>
                  <input placeholder="User Name"/>
              </div>
              <div className="EmailInput">
                  <EmailIcon className="AccountIcon" style={{color: "#D1D1D1"}}/>
                  <input placeholder="Email Address"/>
              </div>
              <div className="PassInput">
                  <VpnKeyIcon className="KeyIcon" style={{color: "#D1D1D1"}}/>
                  <input placeholder="Password"/>
              </div>
              <div className="CheckContainer">
                  <FormControlLabel
                      control={
                          <Checkbox
                          // checked={checked}
                          // onChange={handleChange}
                          style={{color: "#4786FF"}}
                          name="Remember"
                          inputProps={{ 'aria-label': 'primary checkbox' }}
                          />
                      }
                      style={{color: '#929699', fontWeight: '300'}}
                      label="Remember me"
                  />
                  <button className="SignupBtn">SIGNUP</button>
              </div>
              <div className="ForgotContainer">
                  <p className="RegisterPara" onClick={props.jumpLoginClicked}>Login now</p>
              </div>
              <div className="OrBreak">
                  <div className="row"></div>
                  <p>or</p>
                  <div className="row"></div>
              </div>
              <div className="AuthOptionsContainer">
                  <div className="FacebookSignup">
                      <img src={Facebook} alt="facebook icon"></img>
                      <p>SIGNUP WITH FACEBOOK</p>
                  </div>
                  <div className="TwitterSignup">
                      <img src={Twitter} alt="twitter icon"></img>
                      <p>SIGNUP WITH TWITTER</p>
                  </div>
                  <div className="GoogleSignup">
                      <img src={Google} alt="google icon"></img>
                      <p>SIGNUP WITH GOOGLE</p>
                  </div>
              </div>
          </div>
          <div className="ImageContainer">
            <img src={SignupImage} alt="Signup preview"></img>
          </div>
      </div>
    );
}

export default Signup;