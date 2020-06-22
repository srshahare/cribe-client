import React from 'react';
import './Second.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Pagination from '@material-ui/lab/Pagination';
import Item from './blog/Item';


const Second = (props) => {
    AOS.init();

    const { blogs } = props;

    return(
        <div className="CommunityMainSecond">
            <h5>Blogs</h5>
           <div className="DesktopList">
            <GridList cellHeight={400} spacing={3}>
                {blogs.map((blog, i) => (
                <GridListTile style={{padding: '0 1rem'}} key={blog._id} cols={blog.feature ? 1 : 2/3} rows={1}>
                    <Item 
                        blog={blog}/>
                </GridListTile>
                ))}
            </GridList>
            </div>
           <div className="MobileList">
            <GridList cellHeight={400} cols={1} spacing={1}>
                {blogs.map((blog, i) => (
                <GridListTile style={{padding: '0 1rem'}} key={blog._id}>
                    <Item 
                        blog={blog}/>
                </GridListTile>
                ))}
            </GridList>
            </div>
            <Pagination count={10} color="primary" className="Pager" />
        </div>
    )
}

export default Second;