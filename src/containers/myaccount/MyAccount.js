import React, {Component} from 'react';
import './MyAccount.css';
import {Route} from 'react-router-dom';
import TopSection from '../../components/myaccount/top/TopSection';
import BottomSection from '../../components/myaccount/bottom/BottomSection';
import EditAccount from '../../components/myaccount/edit/EditAccount';

import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

class MyAccount extends Component{
    constructor(props){
        super(props);
        this.state = {
            bookmarked: null,
            myblogs: null,
            editName: '',
            editUserId: '',
            editBio: '',
            editImage: '',
            imageFile: null
        }
    }

    componentDidMount() {
        fetch('https://thawing-reaches-88200.herokuapp.com/me/account/bookmarked', {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then(res => {
            return res.json();
        })
        .then(result => {
            this.setState({bookmarked: result.blogs})
        })


        //my blogs
        fetch('https://thawing-reaches-88200.herokuapp.com/me/account/myblogs', {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then(res => {
            return res.json();
        })
        .then(result => {
            console.log(result)
            this.setState({myblogs: result.blogs})
        })
    }

    inputChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        switch(name){
            case 'name':
                this.setState({editName: value});
                break;
            case 'userid':
                this.setState({editUserId: value});
                break;
            case 'bio':
                this.setState({editBio: value});
                break;
            default: 
                console.log('wrong input!!');
        }
    }

    saveProfileHandler = () => {
        const data = new FormData();
        data.append('name', this.state.editName);
        data.append('userId', this.state.editUserId);
        data.append('bio', this.state.editBio);
        data.append('image', this.state.imageFile);
        fetch('https://thawing-reaches-88200.herokuapp.com/me/update', {
            method: 'PUT',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            },
            body: data
        })
        .then(res => {
            return res.json()
        })
        .then(result => {
            if(result){
                this.props.history.push('/cribe-client/account')
            }
        })
        .catch(err => {
            console.log(err)
        })
    }

    onClickEdit = () => {
        this.setState({
            editName: this.props.me.name,
            editUserId: this.props.me.user_id,
            editBio: this.props.me.bio,
            editImage: this.props.me.profile_image
        })
    }

    profileImageHandler = (e) => {
        const imgUrl = URL.createObjectURL(e.target.files[0])
        this.setState({editImage: imgUrl, imageFile: e.target.files[0]})
    }

    render() {
        return(
            <div className="MyAccountCont">
                {this.props.loading?
                <h2>Loading....</h2>:
                <React.Fragment>
                <Route exact path="/cribe-client/account">
                    <TopSection
                        onClickEdit={this.onClickEdit}
                        me={this.props.me}/>
                </Route>
                <Route path="/cribe-client/account/edit">
                    <EditAccount 
                        onInputChange={this.inputChangeHandler}
                        saveClicked={this.saveProfileHandler}
                        name={this.state.editName}
                        userid={this.state.editUserId}
                        bio={this.state.editBio}
                        image={this.state.editImage}
                        changeProfile={this.profileImageHandler}/>
                </Route>
                </React.Fragment>
                }
                <br></br>
                {(this.state.bookmarked === null) || (this.state.myblogs === null)?
                '':
                <BottomSection 
                    blogs={this.state.myblogs}
                    bookmarks={this.state.bookmarked}/>
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {loading, me} = state.user;
    console.log(me)
    return {
        loading, me
    };
}

export default connect(mapStateToProps)(withRouter(MyAccount))