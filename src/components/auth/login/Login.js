import React from "react";
import './Login.css'

import EmailIcon from '@material-ui/icons/Email';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
// import VisibilityIcon from '@material-ui/icons/Visibility';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Facebook from '../../../assets/images/facebook_icon.png';
import Twitter from '../../../assets/images/twitter_icon.png';
import Google from '../../../assets/images/google_icon.png';
import LoginImage from '../../../assets/images/login.svg';
import CloseIcon from '@material-ui/icons/Close';

import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import axios from 'axios';

const Login = (props) => {

    const responseGoogle = async (res) => {
        console.log(res)
        const accessToken = await res.accessToken;
        const response = await axios.post('http://localhost:5000/auth/oauth/google', {
            access_token: accessToken
        })
        console.log(response)
        // fetch('http://localhost:5000/auth/oauth/google', {
        //     method: 'POST',
        //     headers: {
        //         "Content-Type": 'application/json'
        //     },
        //     body: JSON.stringify({
        //         access_token: accessToken
        //     })
        // })
        // .then(res => {
        //     return res.json();
        // })
        // .then(result => {
        //     localStorage.setItem('token', result.token);
        //     localStorage.setItem('uid', result.uid);
        //     console.log(result)
        // })
    }

    return (
        <div className='LoginComponent'>
          <CloseIcon onClick={props.closeAuth} className="CloseIcon" />
          <div className="InputContainer">
              <div className="EmailInput">
                  <EmailIcon className="AccountIcon" style={{color: "#D1D1D1"}}/>
                  <input 
                    placeholder="Email Address"
                    name="email"
                    onChange={props.onInputChange}/>
              </div>
              <div className="PassInput">
                  <VpnKeyIcon className="KeyIcon" style={{color: "#D1D1D1"}}/>
                  <input 
                    placeholder="Password"
                    name="password"
                    onChange={props.onInputChange}/>
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
                  <button className="LoginBtn" onClick={props.loginHandler}>LOGIN</button>
              </div>
              <div className="ForgotContainer">
                  <p className="RegisterPara" onClick={props.jumpRegisterClicked}>Register now</p>
                  <p className="ForgotPara">Forgot password?</p>
              </div>
              <div className="OrBreak">
                  <div className="row"></div>
                  <p>or</p>
                  <div className="row"></div>
              </div>
              <div className="AuthOptionsContainer">
                  <div className="FacebookLogin">
                    {/* <FacebookLogin 
                        
                    /> */}
                      <img src={Facebook} alt="facebook icon"></img>
                      <p>LOGIN WITH FACEBOOK</p>
                  </div>
                  <div className="TwitterLogin">
                      <img src={Twitter} alt="twitter icon"></img>
                      <p>LOGIN WITH TWITTER</p>
                  </div>
                  <div className="GoogleLogin">
                      <img src={Google} alt="google icon"></img>
                      <p>LOGIN WITH GOOGLE</p>
                    {/* <GoogleLogin 
                        clientId="315283119800-nh5uvpln740lhmj1kd49jhf309q9bkpi.apps.googleusercontent.com"
                        buttonText="Sign In with Google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        className="GoogleLogin"
                    /> */}
                  </div>
              </div>
          </div>
          <div className="ImageContainer">
            <img src={LoginImage} alt="login preview"></img>
          </div>
      </div>
    );
}

export default Login;