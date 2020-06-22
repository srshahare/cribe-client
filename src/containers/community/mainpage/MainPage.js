import React, {Component} from 'react';
import './MainPage.css'
import First from '../../../components/community/main/First';
import Second from '../../../components/community/main/Second';
import Footer from '../../../components/footers/landingfooter/Footer';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class MainPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            page: null,
            blogs: null,
            me: null
        }
    }

    componentDidMount() {
        const commId = this.props.match.params.commId;
        fetch('https://thawing-reaches-88200.herokuapp.com/community/page/'+commId, {
            methdo: 'GET',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then(res => {
            return res.json();
        })
        .then(resultData => {
            this.setState({page: resultData})
        }) 
        
        fetch('https://thawing-reaches-88200.herokuapp.com/community/blogs/'+commId, {
            methdo: 'GET',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then(res => {
            return res.json();
        })
        .then(resultData => {
            this.setState({blogs: resultData.blogs})
        })
    }

    render() {
        return(
            <div className="MainPage">
                {this.props.loading?
                <h1>Loading....</h1>:
                <div>
                    {(this.state.page === null)?
                        "":
                        <First 
                            me={this.props.me}
                            page={this.state.page}/>
                    }  
                    {(this.state.blogs === null)?
                        "":
                        <Second 
                            me={this.props.me}
                            blogs={this.state.blogs}/>
                    }  
                    <Footer />
                </div>
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { me, loading } = state.user;
    return {
        me, loading
    };
  }

export default connect(mapStateToProps)(withRouter(MainPage));