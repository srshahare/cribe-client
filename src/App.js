import React, {Component} from 'react';
import './App.css';
import Landing from './containers/landing/Landing';
import Layout from './containers/layout/Layout';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isAuthenticated: true
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.isAuthenticated?
        <Layout />:
        <Landing />
        }
      </div>
    );
  }
}

export default App;
