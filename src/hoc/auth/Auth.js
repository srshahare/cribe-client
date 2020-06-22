import React, {Component} from 'react';
import Login from '../../components/auth/login/Login';
import './Auth.css';
import Selection from '../selection/Selection';
import Signup from '../../components/auth/signup/Signup';

import { connect } from 'react-redux';
import { userActions } from '../../store/actions';


class Auth extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isNewUser: false,
            isLoginPage: true,
            name: '',
            email: '',
            password: ''
        }
    }

    jumpRegisterHandler = () => {
        this.setState({isLoginPage: false})
    }
    jumpLoginHandler = () => {
        this.setState({isLoginPage: true})
    }

    inputHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        switch(name){
            case 'username':
                this.setState({name: value});
                break;
            case 'email':
                this.setState({email: value});
                break;
            case 'password':
                this.setState({password: value});
                break;
            default:
                console.log('wrong input');
        }
    }

    signUpHandler = () => {
        fetch('https://thawing-reaches-88200.herokuapp.com/auth/signup', {
            method: 'PUT',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: this.state.email,
                name: this.state.name,
                password: this.state.password
            })
        })
        .then(res => {
            if(res.status === 422){
                throw new Error('Validation error, please provide correct input values.');
            }
            if(res.status !== 200 && res.status !== 2001){
                console.log('Error!');
                throw new Error('Creating a user failed!');
            }
            return res.json();
        })
        .then(resData => {
            console.log(resData)
            this.jumpLoginHandler();
        })
        .catch(err => { 
            console.log(err)
        })
    }

    loginHandler = () => {
        const { email, password } = this.state;
        const { dispatch } = this.props;
        if (email && password) {
            console.log("login")
            dispatch(userActions.login(email, password));
        }
    }

    render(){
        return(
            <div className="AuthCont">
                <div className="AuthBox">
                    {this.state.isNewUser?
                    <Selection />:
                    <div>
                        {this.state.isLoginPage?
                        <Login closeAuth={this.props.closeAuth}
                            loginHandler={this.loginHandler}
                            onInputChange={this.inputHandler}
                            jumpRegisterClicked={this.jumpRegisterHandler}/>:
                        <Signup closeAuth={this.props.closeAuth}
                            onInputChange={this.inputHandler}
                            signUpHandler={this.signUpHandler}
                            jumpLoginClicked={this.jumpLoginHandler}/>
                        }
                    </div>
                    }
                </div>
                <div onClick={this.props.backDropClicked} className="BackDrop"></div>:
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

export default connect(mapStateToProps)(Auth)