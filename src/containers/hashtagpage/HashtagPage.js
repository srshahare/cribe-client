import React, {Component} from 'react';
import HomeNav from '../../components/navigations/homenav/HomeNav';
import TopSection from '../../components/hashtagpage/top/TopSection';
import BottomSection from '../../components/hashtagpage/bottom/BottomSection';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../../store/actions';
class HashtagPage extends Component {
    constructor(props){
        super(props);
        this.state = {
          posts: null,
          profile: {
            image: 'default',
            name: 'User Name',
            user_id: '@userId'
          },
          page: null, 
          blogs: null,
          followers: null
        }
    }

    logoutHandler = () => {
        this.props.dispatch(userActions.logout());
    }

    componentDidMount() {
        const hashId = this.props.match.params.hashId;
        fetch(`https://thawing-reaches-88200.herokuapp.com/hashtag/${hashId}`, {
            method: 'GET',
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then(res => {
            return res.json();
        })
        .then(resultData => {
            this.setState({page: resultData});
        })
        .catch(err => {
            console.log(err)
        })

        fetch('https://thawing-reaches-88200.herokuapp.com/hashtag/blogs/'+hashId, {
            method: 'GET',
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then(res => {
            return res.json()
        })
        .then(result => {
            this.setState({blogs: result});
            console.log(result)
        })
        .catch(err => {
            console.log(err)
        })

        fetch('https://thawing-reaches-88200.herokuapp.com/hashtag/followers/'+hashId, {
            method: 'GET',
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then(res => {
            return res.json()
        })
        .then(result => {
            this.setState({followers: result});
            console.log(result)
        })
    }

    render(){
        return(
            <div>
                <HomeNav onLogout={this.logoutHandler} profile={this.state.profile}/>
                {this.state.page === null?
                    '':
                    <TopSection page={this.state.page} />
                }
                <br></br>
                {this.state.blogs === null || this.state.followers === null || this.props.loading === true?
                    '':
                    <BottomSection 
                        blogs={this.state.blogs}
                        followers={this.state.followers}
                        me={this.props.me}/>
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

export default connect(mapStateToProps)(withRouter(HashtagPage));