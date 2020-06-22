import React, {Component} from 'react';
import './Hashtag.css';

import HashtagBack from '../../assets/images/hashtagback.jpg';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { NavLink } from 'react-router-dom';

class Hashtag extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isNewUser: false,
            isLoginPage: true,
            categories: [],
            hashtag: '',
            category: ''
        }
    }

    jumpRegisterHandler = () => {
        this.setState({isLoginPage: false})
    }
    jumpLoginHandler = () => {
        this.setState({isLoginPage: true})
    }

    publishHashtag = () => {
        const cat = this.state.category;
        const name = this.state.hashtag;
        fetch('https://thawing-reaches-88200.herokuapp.com/hashtag/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify({
                name: name,
                category: cat 
            })
        })
        .then(res => {
            return res.json();
        })
        .then(resultData => {
            console.log(resultData)
        })
        .catch(err => {
            console.log(err)
        })
    }
    changeHashName = (e) => {
        const value = e.target.value;
        this.setState({hashtag: value})
    }
    onSelectedCategory = (option) => {
        console.log(option)
        this.setState({
            category: option
        })
    }
 

    componentDidMount() {
        fetch('https://thawing-reaches-88200.herokuapp.com/category/all')
            .then(result => {
                return result.json();
            })
            .then(resultData => {
                const categories = resultData.categories
                this.setState({
                    categories: categories
                })
            })
    }

    render(){
        return(
            <div className="HashtagCont">
                <img src={HashtagBack} alt="hashtag background"></img>
                <div className="HashtagBox">
                    <h2>Create your #hashtag</h2>
                    <div className="HashtagInput">
                        <input onChange={this.changeHashName} className="Hashtagname" placeholder="Hashtag"></input>
                        <Autocomplete
                            style={{width: '70%'}}
                            id="combo-box-demo"
                            options={this.state.categories}
                            getOptionLabel={(option) => option.name}
                            renderOption={(option, {selected} ) => (
                                <div onClick={() => this.onSelectedCategory(option._id)} style={{ width: '100%' }}>
                                      <p>{option.name}</p>
                                </div>
                            )}
                            renderInput={(params) => 
                            <TextField {...params} label="Domain name" variant="outlined" />}
                        />                    
                    </div>
                    <div className="PublishBtn">
                        <button onClick={() => this.publishHashtag()}>Publish</button>
                        <NavLink to="/">Cancel</NavLink>
                    </div>
                </div>
                <div onClick={this.props.backDropClicked} className="BackDrop"></div>:
            </div>
        )
    }
}

export default Hashtag;
