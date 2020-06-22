import React, {Component} from 'react';
import './BottomSection.css';
import Blog from '../items/blog/Blog';
import User from '../items/user/User';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

class BottomSection extends Component {
    constructor(props){
        super(props);
        this.state = {
            selection: 'BLOGS'
        }
    }

    ActiveElement = (event) => {
        const elementId = event.target.id;
        switch(elementId){
            case 'hashtagblogs':
                this.setState({selection: 'BLOGS'}); 
                document.getElementById(elementId).classList.add('active')
                document.getElementById('hashtagtagged').classList.remove('active')
                break;
            case 'hashtagtagged': 
                this.setState({selection: 'FOLLOWERS'}); 
                document.getElementById('hashtagblogs').classList.remove('active')
                document.getElementById(elementId).classList.add('active')
                break;
            default: 
                console.log('wrong input');
        }
    }

    render(){
        let renderComponent;
        switch(this.state.selection) {
            case 'BLOGS':
                renderComponent = <div className="Blogs">
                    <GridList cellHeight={300} spacing={1} cols={3}>
                        {this.props.blogs.map((blog, i) => (
                        <GridListTile key={blog._id} cols={blog.feature ? 1 : 1} rows={1}>
                            <Blog 
                                blog={blog}/>
                        </GridListTile>
                        ))}
                    </GridList>
                </div>
                break;
            case 'FOLLOWERS':
                renderComponent = <div className="Followers">
                    {this.props.followers.map((user, i) => {
                        return (
                            <User
                                key={user._id} 
                                user={user}
                                me={this.props.me}/>
                        )
                    })}
                </div>
                break;
            default: 
                console.log('wrong input');
        }
    return(
        <div className="HashtagBottomSection">
            <div className="OptionBox">
                <div className="Options">
                    <button id="hashtagblogs" className='active' onClick={this.ActiveElement}>BLOGS</button>
                    <button id="hashtagtagged" className='' onClick={this.ActiveElement}>FOLLOWERS</button>
                </div>
                <hr></hr>
            </div>
            <div className="Container">
                {renderComponent}
            </div>
        </div>
    )
    }
}

export default BottomSection