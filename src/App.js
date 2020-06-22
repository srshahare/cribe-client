import React, {Component, Fragment} from 'react';
import './App.css';
import Landing from './containers/landing/Landing';
import Layout from './containers/layout/Layout';

import { connect } from 'react-redux';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isAuthenticated: false
    }
  }

  componentDidMount() {
    // this.props.dispatch(userActions.getAll());
  }

  render() {
    const { authentication } = this.props;
    return (
      <div className="App">
        {authentication.loggedIn?
          <Layout />:
          <Landing />
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { alert, authentication } = state;
  return {
      alert, authentication
  };
}

export default connect(mapStateToProps, null)(App);
