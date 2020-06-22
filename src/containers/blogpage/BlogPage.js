import React, {Component} from 'react';
import './BlogPage.css';
import PageNav from '../../components/navigations/pagenav/PageNav';
import Header from '../../components/blogpage/header/Header';
import PageContent from '../../components/blogpage/content/PageContent';
import Bottom from '../../components/blogpage/bottombox/Bottom';
import ExploreMoreList from '../../components/blogpage/explore/ExploreMoreList';
import Footer from '../../components/footers/landingfooter/Footer'

import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import {RenderContent} from '../../utils/RenderContent';

class BlogPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            blog: null,
            blogContent: null,
            creator: null,
            community: null,
            me: null,
            blogId: null,
            recommendation: null
        }
    }

    componentDidMount() {
        const blogId = this.props.match.params.blogId;
        this.setState({blogId: blogId});
        fetch(`https://thawing-reaches-88200.herokuapp.com/feed/page/${blogId}`, {
                method: 'GET',
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            })
            .then(res => {
                if(res.status !== 200){
                    throw new Error("Failed to fetch posts.");
                  }
                  return res.json();
            })
            .then(resData => {
                this.setState({ blog: resData.blog });
                const cont = RenderContent(resData.blog.content);
                this.setState({blogContent: cont})
            })
            .catch(err => {
                console.log(err)
            })

            fetch('https://thawing-reaches-88200.herokuapp.com/feed/blog/metainfo/'+blogId, {
                method: 'GET', 
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            })
            .then(res => {
            return res.json();
            })
            .then(result => {
                this.setState({creator: result.creator});
                this.setState({community: result.community});
            })

            fetch('https://thawing-reaches-88200.herokuapp.com/me', {
                method: 'GET', 
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            })
            .then(res => {
                return res.json();
            })
            .then(result => {
                this.setState({me: result.user})
            })

            //get recommended blogs
            fetch('https://thawing-reaches-88200.herokuapp.com/community/recommendation/blog/'+blogId, {
                method: 'GET', 
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                },
                params: {
                    blogId: blogId,
                }
            })
            .then(res => {
                return res.json();
            })
            .then(result => {
                this.setState({recommendation: result})
            })

    }

    render(){
        return(
            <div className="BlogPage">
                {this.state.blog === null?
                "":
                <Header blog={this.state.blog}/>
                }
                {this.state.blogContent === null || this.state.me === null || this.state.creator === null ?
                '':
                <PageContent 
                    me={this.state.me}
                    creator={this.state.creator}
                    blogContent={this.state.blogContent}/>
                }
                {this.state.creator === null || this.state.community === null 
                || this.state.me === null || this.state.blogId === null || this.state.blog === null?
                "":
                <Bottom 
                    blogId={this.state.blogId}
                    me={this.state.me}
                    blog={this.state.blog}
                    creator={this.state.creator}
                    community={this.state.community}/>
                }
                <h2 className="ExploreTitle">Explore More</h2>
                {this.state.recommendation === null?
                "":
                <ExploreMoreList
                    blogs={this.state.recommendation} />
                }
                <Footer/>
            </div>
        )
    }
}

export default withRouter(BlogPage);