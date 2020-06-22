import React, {Component} from 'react';
import First from '../../components/interests/First';
import Second from '../../components/interests/Second';

import { userActions } from '../../store/actions';
import { connect } from 'react-redux';

class Interest extends Component {
    constructor(props){
        super(props);
        this.state = {
          posts: null,
          profile: {
            image: 'default',
            name: 'User Name',
            user_id: '@userId'
          },
          topics: null,
          users: null,
          communities: null,
          hashtags: null,
          me: null
        }
    }

    logoutHandler = () => {
        this.props.dispatch(userActions.logout());
    }

    componentDidMount() {
        fetch('https://thawing-reaches-88200.herokuapp.com/category/all', {
            method: 'GET'
        })
        .then(res => {
            return res.json();
        })
        .then(resultData => {
            const topics = resultData.categories;
            this.setState({topics: topics})
        })

        fetch('https://thawing-reaches-88200.herokuapp.com/allusers', {
            method: 'GET',
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token') 
            }
        })
        .then(res => {
            return res.json();
        })
        .then(resultData => {
            const users = resultData.users;
            this.setState({users: users})
        })

        fetch('https://thawing-reaches-88200.herokuapp.com/community/all', {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then(res => {
            return res.json();
        })
        .then(result => {
            console.log(result);
            this.setState({communities: result.communities});
        })

        fetch('https://thawing-reaches-88200.herokuapp.com/hashtag/all/tags', {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then(res => {
            return res.json();
        })
        .then(result => {
            console.log(result);
            this.setState({hashtags: result.hashtags});
        })
    }

    render(){
        return(
            <div>
                <First />
                {this.state.topics === null || this.state.hashtags === null || this.state.communities === null
                    || this.state.users === null || this.props.loading === true?
                '':
                <Second 
                    me={this.props.me}
                    hashtags={this.state.hashtags}
                    communities={this.state.communities}
                    topics={this.state.topics}
                    users={this.state.users}/>
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {loading, me} = state.user;
    return {
        loading, me
    };
}

export default connect(mapStateToProps)(Interest);