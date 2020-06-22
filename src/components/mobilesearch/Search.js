import React, {useEffect, useState} from 'react';
import './Search.css';
import { Avatar } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const Search = () => {
    const history = useHistory();

    const [people, setPeople] = useState(null);
    const [tags, setTags] = useState(null);
    const [pages, setPages] = useState(null);
    const [blogs, setBlogs] = useState(null);
    const [search, setSearch] = useState('');

    const changeHandler = (e) => {
        const value = e.target.value;
        setSearch(value)
    }

    useEffect(() => {
      fetch('https://thawing-reaches-88200.herokuapp.com/me/homesearch', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          Authorization: 'Bearer ' + localStorage.getItem('token')
        },
        body: JSON.stringify({
          search: search
        })
      })
      .then(res => {
        return res.json();
      })
      .then(result => {
        console.log(result)
        setPages(result.pages);
        setTags(result.tags);
        setPeople(result.people);
        setBlogs(result.blogs);
      })
    }, [search])

    const userClick = (id) => {
      console.log('clicked user')
    }
    const pageClick = (id) => {
      history.push('/cribe-client/community/'+id)
    }
    const tagClick = (id) => {
      history.push('/cribe-client/hashtag/page/'+id)
    }
    const blogClick = (id) => {
      history.push('/cribe-client/page/'+id)
    }
  
    return(
      <div className="MobileSearch">
          <input placeholder="Search here..." onChange={changeHandler}></input>
          <br></br><br></br>
          {tags === null || people === null || pages === null || blogs === null?
          "":
           <div className="HomeSearchContainer">
              <p>Search for {search}</p>
              <br></br>
             {people.length === 0?
             "":
             <div className="PeopleContainer">
                {people.map(user => {
                  return (
                    <div className="People"
                        key={user._id}
                        onClick={() => userClick(user._id)}>
                      <img src={user.profile_image} alt={user.name}></img>
                      <div>
                        <h6>{user.name}</h6>
                        <p>in people</p>
                      </div>
                    </div>
                  )
                })}
              </div>
              }
              {pages.length === 0?
              "":
             <div className="PagesContainer">
                {pages.map(page => {
                  return (
                    <div className="Page"
                        key={page._id}
                        onClick={() => pageClick(page._id)}>
                      <img src={page.preview} alt={page.name}></img>
                      <div>
                        <h6>{page.name}</h6>
                        <p>in communities</p>
                      </div>
                    </div>
                  )
                })}
              </div>
              }
              {tags.length === 0?
              "":
              <div className="TagsContainer">
                {tags.map(tag => {
                  return (
                    <div className="Tag"
                        key={tag._id}
                        onClick={() => tagClick(tag._id)}>
                      <Avatar style={{width: '35px', height: '35px'}}>#</Avatar>
                      <div>
                        <h6>{tag.name}</h6>
                        <p>in hashtags</p>
                      </div>
                    </div>
                  )
                })}
              </div>
              }
              {blogs.length === 0?
              "":
              <div className="BlogsContainer">
                {blogs.map(blog => {
                  return (
                    <div className="Blog"
                        key={blog._id}
                        onClick={() => blogClick(blog._id)}>
                      <Avatar src={blog.preview} alt={blog.title} style={{width: '35px', height: '35px'}}></Avatar>
                      <div>
                        <h6>{blog.title}</h6>
                        <p>in blogs</p>
                      </div>
                    </div>
                  )
                })}
              </div>
              }
           </div>
          }
        </div>
    )
}

export default Search;