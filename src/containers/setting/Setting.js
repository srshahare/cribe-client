import React, {Component} from 'react';
import './Setting.css';

import HomeNav from '../../components/navigations/homenav/HomeNav';
import EditProfile from '../../components/setting/editprofile/EditProfile';
import ChangePass from '../../components/setting/changepassword/ChangePass';

class Setting extends Component {
    constructor(props){
        super(props);
        this.state = {
            selected: ''
        }
    }

    ActiveElement = (event) => {
        const elementId = event.target.id;
        switch(elementId){
            case 'settingprofile': 
                this.setState({selected: 'profile'})
                document.getElementById(elementId).classList.add('active')
                document.getElementById('settingpass').classList.remove('active')
                document.getElementById('settingcommunity').classList.remove('active')
                document.getElementById('settinghashtag').classList.remove('active')
                document.getElementById('settingemail').classList.remove('active')
                document.getElementById('settingnotification').classList.remove('active')
                document.getElementById('settingprivacy').classList.remove('active')
                break;
            case 'settingpass': 
                this.setState({selected: 'password'})
                document.getElementById('settingprofile').classList.remove('active')
                document.getElementById(elementId).classList.add('active')
                document.getElementById('settingcommunity').classList.remove('active')
                document.getElementById('settinghashtag').classList.remove('active')
                document.getElementById('settingemail').classList.remove('active')
                document.getElementById('settingnotification').classList.remove('active')
                document.getElementById('settingprivacy').classList.remove('active')
                break;
            case 'settingcommunity': 
                this.setState({selected: 'community'})
                document.getElementById('settingprofile').classList.remove('active')
                document.getElementById('settingpass').classList.remove('active')
                document.getElementById(elementId).classList.add('active')
                document.getElementById('settinghashtag').classList.remove('active')
                document.getElementById('settingemail').classList.remove('active')
                document.getElementById('settingnotification').classList.remove('active')
                document.getElementById('settingprivacy').classList.remove('active')
                break;
            case 'settinghashtag': 
                this.setState({selected: 'hashtag'})
                document.getElementById('settingprofile').classList.remove('active')
                document.getElementById('settingpass').classList.remove('active')
                document.getElementById(elementId).classList.add('active')
                document.getElementById('settingcommunity').classList.remove('active')
                document.getElementById('settingemail').classList.remove('active')
                document.getElementById('settingnotification').classList.remove('active')
                document.getElementById('settingprivacy').classList.remove('active')
                break;
            case 'settingemail':
                this.setState({selected: 'email'})
                document.getElementById('settingprofile').classList.remove('active')
                document.getElementById('settingpass').classList.remove('active')
                document.getElementById('settingcommunity').classList.remove('active')
                document.getElementById('settinghashtag').classList.remove('active')
                document.getElementById(elementId).classList.add('active')
                document.getElementById('settingnotification').classList.remove('active')
                document.getElementById('settingprivacy').classList.remove('active')
                break;
            case 'settingnotification':
                this.setState({selected: 'notification'}) 
                document.getElementById('settingprofile').classList.remove('active')
                document.getElementById('settingpass').classList.remove('active')
                document.getElementById('settingcommunity').classList.remove('active')
                document.getElementById('settinghashtag').classList.remove('active')
                document.getElementById('settingemail').classList.remove('active')
                document.getElementById(elementId).classList.add('active')
                document.getElementById('settingprivacy').classList.remove('active')
                break;
            case 'settingprivacy': 
                this.setState({selected: 'privacy'})
                document.getElementById('settingprofile').classList.remove('active')
                document.getElementById('settingpass').classList.remove('active')
                document.getElementById('settingcommunity').classList.remove('active')
                document.getElementById('settinghashtag').classList.remove('active')
                document.getElementById('settingemail').classList.remove('active')
                document.getElementById('settingnotification').classList.remove('active')
                document.getElementById(elementId).classList.add('active')
                break;
            default: 
                console.log('wrong input');
        }
    }

    render(){
        let renderElement = <EditProfile />
        switch(this.state.selected){
            case 'profile':
                renderElement = <EditProfile />
                break;
            case 'password':
                renderElement = <ChangePass />
                break;
            case 'community':
                renderElement = <ChangePass />
                break;
            case 'hashtag':
                renderElement = <ChangePass />
                break;
            case 'email':
                renderElement = <ChangePass />
                break;
            case 'notification':
                renderElement = <ChangePass />
                break;
            case 'privacy':
                renderElement = <ChangePass />
                break;
            default:
                console.log('wrong input')
        }
        return(
            <div className="Setting">
                <HomeNav />
                {/* <h1>Setting</h1> */}
                <div className="Content">
                    <div className="ContentOption">
                        <p id="settingprofile" className='active' onClick={this.ActiveElement}>Edit Profile</p>
                        <p id="settingpass" className='' onClick={this.ActiveElement}>Change Password</p>
                        <p id="settingcommunity" className='' onClick={this.ActiveElement}>Communities</p>
                        <p id="settinghashtag" className='' onClick={this.ActiveElement}>Hashtag</p>
                        <p id="settingemail" className='' onClick={this.ActiveElement}>Email</p>
                        <p id="settingnotification" className='' onClick={this.ActiveElement}>Push Notification</p>
                        <p id="settingprivacy" className='' onClick={this.ActiveElement}>Privacy and Security</p>
                    </div>
                    <div className="Container">
                        {renderElement}
                    </div>
                </div>
            </div>
        )
    }
}

export default Setting;