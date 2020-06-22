import React, {Component} from 'react';
import './CommunityLanding.css'
import First from '../../../components/community/landing/First';
import Second from '../../../components/community/landing/Second';
import Third from '../../../components/community/landing/Third';
import Footer from '../../../components/footers/landingfooter/Footer'
import CreateCommunity from '../../../hoc/dialog/CreateCommunity';

import axios from 'axios';

class CommunityLanding extends Component{
    constructor(props){
        super(props);
        this.state = {
            open: false,
            url: 'default',
            name: '',
            desc: '',
            invitations: [],
            searchedUser: []
        }
    }

    onSelectedCategory = (option) => {
        console.log(option)
        this.setState({
            category: option
        })
    }

    handleClose = () => {
        this.setState({
            open: false
        })
    }
    handleOpen = () => {
        this.setState({
            open: true
        })
    }

    inputChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        switch(name){
            case "url":
                this.setState({url: value})
                break;
            case 'name':
                this.setState({name: value})
                break;
            case 'description':
                this.setState({desc: value})
                break;
            default: 
                console.log("Wrong input!!");
        }
    }

    handleCreateCommunity = () => {
        fetch('https://thawing-reaches-88200.herokuapp.com/community/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Beared ' + localStorage.getItem('token')
            },
            body: JSON.stringify({
                imgUrl: this.state.url,
                name: this.state.name,
                desc: this.state.desc,
                invitations: this.state.invitations
            })
        })
        .then(res => {
            return res.json();
        })
        .then(resultData => {
            console.log(resultData)
        })
    }

    handleSearchUser = (e) => {
        const value = e.target.value;
        axios.get('https://thawing-reaches-88200.herokuapp.com/me/searchusers', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            },
            params: {
                searchKey: value
            }
        })
        .then(resultData => {
            this.setState({searchedUser: resultData.data.users})
        })
    }

    onSelectedCategory = (id) => {
        let arr = [...this.state.invitations];
        arr.push(id);
        this.setState({invitations: arr})
    }

    render() {
        return(
            <div className="CommunityLanding">
                <CreateCommunity
                    url={this.state.url}
                    onSelectedCategory={this.onSelectedCategory}
                    search={this.state.searchedUser}
                    handleSearchUser={this.handleSearchUser}
                    handleCreateCommunity={this.handleCreateCommunity}
                    onInputChange={this.inputChangeHandler}
                    handleOpen={this.handleOpen}
                    handleClose={this.handleClose}
                    open={this.state.open} />
                <First 
                    openCreateDialog={this.handleOpen}/>
                <Second />
                <Third />
                <Footer />
            </div>
        )
    }
}

export default CommunityLanding;