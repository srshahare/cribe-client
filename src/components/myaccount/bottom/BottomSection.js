import React, {Component} from 'react';
import './BottomSection.css';
import Bookmark from './items/bookmark/Bookmark';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Blog from './items/blog/Blog';
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
            case 'accountblogs': 
                this.setState({selection: 'BLOGS'})
                document.getElementById(elementId).classList.add('active')
                document.getElementById('accountbookmark').classList.remove('active')
                break;
            case 'accountbookmark': 
                this.setState({selection: 'BOOKMARKED'})
                document.getElementById('accountblogs').classList.remove('active')
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
                    <GridList cellHeight={300} spacing={2}>
                        {this.props.blogs.map((blog, i) => (
                        <GridListTile key={blog._id} cols={blog.feature ? 1 : 1} rows={1}>
                            <Blog 
                                blog={blog}/>
                        </GridListTile>
                        ))}
                    </GridList>
                </div>
                break;
            case 'BOOKMARKED':
                renderComponent = <div className="Bookmarked">
                    {this.props.bookmarks.map((item, i) => {
                        return (
                            <Bookmark
                                key={item._id} 
                                bookmark={item}/>
                        )
                    })}
                </div>
                break;
            default: 
                console.log('wrong input');
        }
    return(
        <div className="AccountBottomSection">
            <div className="OptionBox">
                <div className="Options">
                    <button id="accountblogs" className='active' onClick={this.ActiveElement}>BLOGS</button>
                    <button id="accountbookmark" className='' onClick={this.ActiveElement}>BOOKMARKED</button>
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