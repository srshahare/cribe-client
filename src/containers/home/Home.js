import React, {Component} from 'react';
import './Home.css';
import Grid from '@material-ui/core/Grid';

import HomeNav from '../../components/navigations/homenav/HomeNav';
import Featured from '../featured/Featured';
import PopularList from '../../components/popularblogs/PopularList';
import TopicsListNav from '../../components/topicsnav/TopicsListNav';
import AllBlogs from '../../components/allblogs/AllBlogs';
import TrendingBlogs from '../../components/trendings/TrendingBlogs';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="Home">
        <HomeNav />
        <TopicsListNav />
        <div className="FeaturedSection">
            <Featured />
            <PopularList />
            <div className="AllBlogsHome">
              <Grid container spacing={3}>
                <Grid item xs={8}>
                  <br></br><br></br>
                  <h4>Your read</h4>
                  <AllBlogs />
                </Grid>
                <Grid item xs={4}>
                  <br></br><br></br>
                  <h4>Trending</h4>
                  <TrendingBlogs />
                </Grid>
              </Grid>
            </div>
            <div className="AllBlogsHomeMobile">
              <br></br>
              <h4>Trending</h4>
              <TrendingBlogs />
              <br></br>
              <h4>Your read</h4>
              <AllBlogs />
            </div>
        </div>
      </div>
    );
  }
}

export default Home;
