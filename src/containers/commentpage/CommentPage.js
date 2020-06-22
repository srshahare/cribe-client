import React, {Component} from 'react';
import Top from '../../components/commentpage/top/Top';
import {withRouter} from 'react-router-dom';
import Main from '../../components/commentpage/main/Main';

class CommentPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            blogId: null,
            blog : null,
            creator: null,
            comment: null,
            commentList: null,
            btnDisabled: false
        }
    }

    componentDidMount() {
        const blogId = this.props.match.params.blogId;
        this.setState({blogId: blogId})
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
        })

        fetch('https://thawing-reaches-88200.herokuapp.com/feed/comment/fetch/'+blogId, {
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
            this.setState({commentList: result});
        })
    }

    commentChangeHandler = (e) => {
        const value = e.target.value;
        this.setState({comment: value})
        console.log(this.state.comment)
    }

    commentSend = () => {
        this.setState({btnDisabled: true})
        fetch('https://thawing-reaches-88200.herokuapp.com/feed/comment/add', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify({
                comment: this.state.comment,
                blogId: this.state.blogId
            })
        })
        .then(res => {
            return res.json();
        })
        .then(result => {
            this.props.history.go();
        })
    }

    render(){
        return(
            <div>
                {this.state.blog === null || this.state.creator === null?
                "":
                <Top blog={this.state.blog}
                    creator={this.state.creator}/>
                }
                {this.state.commentList === null?
                "":
                <Main 
                    disabled={this.state.btnDisabled}
                    commentList={this.state.commentList}
                    commentSend={this.commentSend}
                    commentChangeHandler={this.commentChangeHandler}/>
                }
            </div>
        )
    }
}

export default withRouter(CommentPage);