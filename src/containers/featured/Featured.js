import React, {Component} from 'react';
import './Featured.css';
import Blog from '../../components/featured/first/Blog';
import Grid from '@material-ui/core/Grid';
import BlogList from '../../components/featured/second/BlogList';
import PromotionList from '../../components/featured/third/PromotionList';


class Featured extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="Featured">
        <div className="DesktopFeatured">
          <Grid container spacing={3}>
              <Grid item xs={4}>
                  <Blog />
              </Grid>
              <Grid item xs={4}>
                  <BlogList />
              </Grid>
              <Grid item xs={4}>
                  <PromotionList />
              </Grid>
          </Grid>
        </div>
        <div className="MobileFeatured">
          <Blog />
          <BlogList />
          <PromotionList />
        </div>
      </div>
    );
  }
}

export default Featured;
