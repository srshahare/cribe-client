import React, {Component} from 'react';
import './BlogPage.css';
import PageNav from '../../components/navigations/pagenav/PageNav';
import Header from '../../components/blogpage/header/Header';
import PageContent from '../../components/blogpage/content/PageContent';
import Bottom from '../../components/blogpage/bottombox/Bottom';
import ExploreMoreList from '../../components/blogpage/explore/ExploreMoreList';
import Footer from '../../components/footers/landingfooter/Footer'

class BlogPage extends Component {
    render(){
        return(
            <div className="BlogPage">
                <PageNav />
                <Header />
                <PageContent />
                <Bottom />
                <h2 className="ExploreTitle">Explore More</h2>
                <ExploreMoreList />
                <Footer/>
            </div>
        )
    }
}

export default BlogPage;