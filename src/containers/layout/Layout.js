import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from '../home/Home';
import BlogPage from '../blogpage/BlogPage';
import MyAccount from '../myaccount/MyAccount';
import Hashtag from '../../hoc/hashtagcreator/Hashtag';
import HashtagPage from '../hashtagpage/HashtagPage';

class Layout extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <Router>
          <Switch>
              <Route path="/" exact><Home /></Route>
              <Route path="/page"><BlogPage /></Route>
              <Route path="/account"><MyAccount /></Route>
              <Route path="/hashtag" exact><HashtagPage /></Route>
              <Route path="/hashtag/create"><Hashtag /></Route>
          </Switch>
      </Router>
    );
  }
}

export default Layout;
