import React, {Component} from 'react';
import Login from '../../components/auth/login/Login';
import './Auth.css';
import Selection from '../selection/Selection';
import Signup from '../../components/auth/signup/Signup';

class Auth extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isNewUser: false,
            isLoginPage: true
        }
    }

    jumpRegisterHandler = () => {
        this.setState({isLoginPage: false})
    }
    jumpLoginHandler = () => {
        this.setState({isLoginPage: true})
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
                        jumpRegisterClicked={this.jumpRegisterHandler}/>:
                        <Signup closeAuth={this.props.closeAuth}
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

export default Auth