import React, {Component} from 'react';
import './All.css'
import Item from '../items/Item';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const All = (props) => {

    const {blogs} = props;

    return(
        <div className="TopicPageAll">
            <h4>All Blogs</h4>
            <div className="DesktopAll">
                <GridList cellHeight={350} spacing={1} cols={4}>
                    {blogs.map((blog) => (
                        <GridListTile key={blog._id} cols={blog.feature ? 2 : 1}>
                        <Item 
                            blog={blog}/>
                    </GridListTile>
                    ))}
                </GridList>
            </div>
            <div className="MobileAll">
                <GridList cellHeight={350} spacing={1} cols={1}>
                    {blogs.map((blog) => (
                    <GridListTile key={blog._id} cols={blog.feature ? 1 : 1} rows={blog.feature ? 1 : 1}>
                        <Item 
                            blog={blog}/>
                    </GridListTile>
                    ))}
                </GridList>
            </div>
        </div>
    )
}

export default All;