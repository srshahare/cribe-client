import React, {Component} from 'react';
import './Home.css';
import Grid from '@material-ui/core/Grid';
import { withRouter } from 'react-router-dom';

import Featured from '../featured/Featured';
import PopularList from '../../components/popularblogs/PopularList';
import TopicsListNav from '../../components/topicsnav/TopicsListNav';
import AllBlogs from '../../components/allblogs/AllBlogs';
import TrendingBlogs from '../../components/trendings/TrendingBlogs';

import { connect } from 'react-redux';
import RecommendList from '../../components/recommend/RecommendList';
import HomeRender from '../../hoc/render/HomeRender';
import ListRender from '../../hoc/render/ListRender';
import Loading from '../../assets/528-spinner-loading.json';
import Lottie from 'react-lottie'
import axios from 'axios';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      posts: null,
      recommend: null,
      popularList: null,
      trendingList: null,
      topicsList: null,
      featureBlog: null,
      featureList: null,
      promotionList: null,
      bookmarks: null,
      page: 1
    }
  }

  isBottom(el) {
    if(el === null){
        console.log("can't reach bottom");
    }
    return el.getBoundingClientRect().bottom <= window.innerHeight;
  }

  componentWillUnmount() {
      document.removeEventListener('scroll', this.trackScrolling);
  }

  trackScrolling = () => {
    const wrappedElement = document.getElementById('blogs-bottom');
    if (this.isBottom(wrappedElement)) {
      console.log('header bottom reached');

      const newArr = [...this.state.posts]
      axios.get('https://thawing-reaches-88200.herokuapp.com/feed/blogs', {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        },
        params: {
          page: this.state.page
        }
      })
      .then(resData => {
          resData.data.blogs.forEach((blog, index) => {
            newArr.push(blog)
          })
          this.setState({...resData.data.blogs, posts: newArr});
          this.setState({page: this.state.page+1});
      })
      .catch(err => {
        console.log(err)
      })
    }
  };

  componentDidMount() {
    document.addEventListener('scroll', this.trackScrolling);
    Promise.all([
      fetch('https://thawing-reaches-88200.herokuapp.com/feed/blogs', {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        },
        params: {
          page: this.state.page
        }
      })
      .then(res =>  res.json()),

      fetch('https://thawing-reaches-88200.herokuapp.com/feed/recommend', {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      }).then(res => res.json()),

      fetch('https://thawing-reaches-88200.herokuapp.com/feed/popular', {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      }).then(res => res.json()),

      fetch('https://thawing-reaches-88200.herokuapp.com/trending', {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      }).then(res => res.json()),

      fetch('https://thawing-reaches-88200.herokuapp.com/feed/topics', {
          method: 'GET',
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
          }
        }).then(res => res.json()),

      fetch('https://thawing-reaches-88200.herokuapp.com/feed/premium', {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
        }).then(res => res.json()),

      fetch('https://thawing-reaches-88200.herokuapp.com/me/', {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      }).then(res => res.json())
    ])
    .then(([blogs, recom, popular, trending, topics, pre, me]) => {
      this.setState({ posts: blogs.blogs, page: this.state.page+1})
      this.setState({recommend: recom.blogs})
      this.setState({popularList: popular.blogs})
      this.setState({trendingList: trending.blogs})
      this.setState({topicsList: topics.topics})
      this.setState({
        featureBlog: pre.featureBlog, 
        featureList: pre.featureList,
        promotionList: pre.promotionList
      })
      this.setState({bookmarks: me.user.bookmarks})
    })
  }

  openBlogPage = (blogId) => {
    this.props.history.push(`/cribe-client/page/${blogId}`)
  }

  topicClickHandler = (id) => {
    this.props.history.push(`/cribe-client/topic/${id}`);
  }

  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: Loading,
      rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
      }
  };
    return (
      <div className="Home">
        {this.state.topicsList === null || this.state.featureBlog === null || this.state.featureList === null
        ||this.state.popularList === null || this.state.posts === null || this.state.promotionList === null 
        ||this.state.trendingList === null?
          // <Lottie options={defaultOptions}
          // height={100}
          // width={100}
          // style={{position: 'fixed', top: "35%", left: '46%'}}
          // isStopped={false}
          // />:
          <HomeRender />:
        <div>
          {this.state.topicsList === null?
          "":
          <TopicsListNav 
            clickedTopic={this.topicClickHandler}
            topics={this.state.topicsList}/>
          }
          <div className="FeaturedSection">
            {this.state.featureBlog === null || this.state.featureList === null
              || this.state.promotionList === null?
            "":
            <Featured
              featureBlog={this.state.featureBlog}
              featureList={this.state.featureList}
              promotionList={this.state.promotionList}/>
            }
            {this.state.popularList === null?
            "":
            <PopularList blogs={this.state.popularList}/>
            }
            <div className="AllBlogsHome">
              <Grid container spacing={3}>
                <Grid item xs={8}>
                  <br></br><br></br>
                  <h4>Your read</h4>
                  {this.state.posts === null || this.state.bookmarks === null?
                    '':
                  <AllBlogs
                    bookmarks={this.state.bookmarks}
                    openBlogPage={this.openBlogPage}
                    blogs={this.state.posts}/>
                  }
                  <ListRender />
                  <div id="blogs-bottom"></div>
                </Grid>
                <Grid item xs={4}>
                  <br></br><br></br>
                  {this.state.recommend === null?
                  '':
                  <React.Fragment>
                    <h4>Recommended</h4>
                    <RecommendList recommend={this.state.recommend}/>
                    <br></br><br></br>
                  </React.Fragment>
                  }
                  <h4>Trending</h4>
                  {this.state.trendingList === null?
                  "":
                  <TrendingBlogs blogs={this.state.trendingList}/>
                  }
                </Grid>
              </Grid>
            </div>
            <div className="AllBlogsHomeMobile">
              <br></br>
              {this.state.recommend === null?
                  '':
                  <React.Fragment>
                      <h4>Recommended</h4>
                      <RecommendList recommend={this.state.recommend}/>
                      <br></br><br></br>
                  </React.Fragment>
              }
              <h4>Trending</h4>
              {this.state.trendingList === null?
              "":
              <TrendingBlogs blogs={this.state.trendingList}/>
              }
              <br></br>
              <h4>Your read</h4>
              {
                this.state.posts === null || this.state.bookmarks === null?
                '':
                <AllBlogs
                  bookmarks={this.state.bookmarks} 
                  blogs={this.state.posts} />
              }
              <ListRender />
              <div id="blogs-bottom"></div>
            </div>
        </div>
        </div>
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { loggingIn } = state.authentication;
  return {
      loggingIn
  };
}

export default connect(mapStateToProps)(withRouter(Home));
