import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from '../home/Home';
import BlogPage from '../blogpage/BlogPage';
import MyAccount from '../myaccount/MyAccount';
import Hashtag from '../../hoc/hashtagcreator/Hashtag';
import HashtagPage from '../hashtagpage/HashtagPage';
import CommunityLanding from '../community/landing/CommunityLanding';
import Interest from '../interests/Interest';
import Statistic from '../stats/Statistic';
import Setting from '../setting/Setting';
import MainPage from '../community/mainpage/MainPage';
import Landing from '../landing/Landing';
import Create from '../create/Create';

import SelectHashtagPage from '../../hoc/dialog/SelectHashtagPage';
import HomeNav from '../../components/navigations/homenav/HomeNav';

import { userActions } from '../../store/actions';
import {connect} from 'react-redux';
import SelectCommunity from '../../hoc/dialog/SelectCommunity';
import PageNav from '../../components/navigations/pagenav/PageNav';
import TopicPage from '../topicpage/TopicPage';
import CommentPage from '../commentpage/CommentPage';
import MobileSearch from '../mobilesearch/MobileSearch';

class Layout extends Component {
  constructor(props){
    super(props);
    this.state = {
      profile: {
        image: 'default',
        name: 'User Name',
        user_id: '@userId'
      },
      hashtagDialog: false,
      hashtags: [],
      commDialog: false,
      communities: [],
    }
  }

  componentDidMount() {
    this.props.dispatch(userActions.getAll());
    fetch('http://localhost:5000/me', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    })
    .then(result => {
      return result.json();
    })
    .then(resData => {
      this.setState({
        profile: {
          image: resData.user.profile_image,
          name: resData.user.name,
          user_id: resData.user.user_id
        }
      })
    })
  }

  logoutHandler = () => {
    this.props.dispatch(userActions.logout());
  }

  openHashtagPage = () => {
    this.setState({hashtagDialog: true})
    fetch('http://localhost:5000/hashtag/myhashtags', {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    })
    .then(res => {
      return res.json();
    })
    .then(resultData => {
      this.setState({hashtags: resultData})
    })
  }

  communityClicked = () => {
    this.setState({commDialog: true})
    fetch('http://localhost:5000/community/mycommunities', {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    })
    .then(res => {
      return res.json();
    })
    .then(resultData => {
      this.setState({communities: resultData})
    })
  }

  closeSelectionHashtag = () => {
    this.setState({hashtagDialog: false})
  }
  closeSelectionComm = () => {
    this.setState({commDialog: false})
  }

  render() {

    return (
      <Router>
           <SelectHashtagPage 
                  hashtags={this.state.hashtags}
                  handleClose={this.closeSelectionHashtag}
                  show={this.state.hashtagDialog}/>
            <SelectCommunity 
              communities={this.state.communities}
              handleClose={this.closeSelectionComm}
              show={this.state.commDialog}/>
          <Switch>
              <Route path="/cribe-client" exact>
                <HomeNav 
                  onLogout={this.logoutHandler} 
                  profile={this.state.profile}
                  openHashtagPage={this.openHashtagPage}
                  communityClicked={this.communityClicked}/>
                <Home />
              </Route>
              <Route path="/cribe-client/page/:blogId">
                <PageNav 
                  onLogout={this.logoutHandler} 
                  profile={this.state.profile}
                  openHashtagPage={this.openHashtagPage}
                  communityClicked={this.communityClicked}/>
                <BlogPage />
              </Route>
              <Route path="/cribe-client/search">
                <HomeNav 
                  onLogout={this.logoutHandler} 
                  profile={this.state.profile}
                  openHashtagPage={this.openHashtagPage}
                  communityClicked={this.communityClicked}/>
                <MobileSearch />
              </Route>
              <Route path="/cribe-client/comment/:blogId">
                <HomeNav 
                  onLogout={this.logoutHandler} 
                  profile={this.state.profile}
                  openHashtagPage={this.openHashtagPage}
                  communityClicked={this.communityClicked}/>
                <CommentPage />
              </Route>
              <Route path="/cribe-client/topic/:topicId">
                <HomeNav 
                  onLogout={this.logoutHandler} 
                  profile={this.state.profile}
                  openHashtagPage={this.openHashtagPage}
                  communityClicked={this.communityClicked}/>
                <TopicPage />
              </Route>
              <Route path="/cribe-client/account">
                <HomeNav 
                  onLogout={this.logoutHandler} 
                  profile={this.state.profile}
                  openHashtagPage={this.openHashtagPage}/>
                <MyAccount />
              </Route>
              <Route path="/cribe-client/community/" exact>
                <HomeNav 
                  onLogout={this.logoutHandler} 
                  profile={this.state.profile}
                  openHashtagPage={this.openHashtagPage}
                  communityClicked={this.communityClicked}/>
                <CommunityLanding />
              </Route>
              <Route path="/cribe-client/community/:commId" exact>
                <PageNav 
                  onLogout={this.logoutHandler} 
                  profile={this.state.profile}
                  openHashtagPage={this.openHashtagPage}
                  communityClicked={this.communityClicked}/>
                <MainPage />
              </Route>
              <Route path="/cribe-client/interests">
                <HomeNav 
                  onLogout={this.logoutHandler} 
                  profile={this.state.profile}
                  openHashtagPage={this.openHashtagPage}
                  communityClicked={this.communityClicked}/>
                <Interest />
              </Route>
              <Route path="/cribe-client/statistics">
                <HomeNav 
                  onLogout={this.logoutHandler} 
                  profile={this.state.profile}
                  openHashtagPage={this.openHashtagPage}
                  communityClicked={this.communityClicked}/>
                <Statistic />  
              </Route>
              <Route path="/cribe-client/hashtag/page/:hashId">
                <HashtagPage />
              </Route>
              <Route path="/cribe-client/hashtag/create" exact>
                {/* <HomeNav 
                  onLogout={this.logoutHandler} 
                  profile={this.state.profile}
                  openHashtagPage={this.openHashtagPage}
                  communityClicked={this.communityClicked}/> */}
                <Hashtag />
              </Route>
              <Route path="/cribe-client/setting">
                <Setting />
              </Route>
              <Route path="/cribe-client/landing">
                <Landing />
              </Route>
              <Route path="/cribe-client/create">
                <Create 
                  onLogout={this.logoutHandler} 
                  profile={this.state.profile}
                  openHashtagPage={this.openHashtagPage}
                  communityClicked={this.communityClicked}/>
              </Route>
          </Switch>
      </Router>
    );
  }
}

export default connect()(Layout);
