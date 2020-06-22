import React, {Component} from 'react';
import './TopicPage.css';
import Footer from '../../components/footers/landingfooter/Footer'

import {withRouter} from 'react-router-dom';
import Header from '../../components/topicpage/header/Header';
import MostViewed from '../../components/topicpage/most/MostViewed';
import All from '../../components/topicpage/all/All';

class TopicPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            topicId: null,
            topic: null,
            blogs: null
        }
    }
    
    componentDidMount() {
        const topicId = this.props.match.params.topicId;
        fetch('https://thawing-reaches-88200.herokuapp.com/category/topic/'+topicId,{
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then(res => {
            return res.json();
        })
        .then(result => {
            console.log(result)
            this.setState({topic: result.topic, blogs: result.blogs})
        })
    }

    render(){
        return(
            <div className="TopicPage">
                {this.state.topic === null || this.state.blogs === null?
                <h2>Loading...</h2>:
                <React.Fragment>
                    <Header 
                        topic={this.state.topic}
                        blogs={this.state.blogs}/>
                    <MostViewed blogs={this.state.blogs}/>
                    <All 
                        blogs={this.state.blogs}/>
                    <Footer/>
                </React.Fragment>
                }
            </div>
        )
    }
}

export default withRouter(TopicPage);