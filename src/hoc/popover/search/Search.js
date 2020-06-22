import React, {useEffect, useState} from 'react';
import './Search.css';
import {Popover} from 'react-bootstrap';
import { Avatar } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const Search = (search) => {
    const history = useHistory();

    const [people, setPeople] = useState(null);
    const [tags, setTags] = useState(null);
    const [pages, setPages] = useState(null);

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
  
    return(
      <Popover id={`popover-positioned-bottom`} className="SearchPopover">
        <Popover.Content className="SearchContent">
          {tags === null || people === null || pages === null?
          "":
           <div className="HomeSearchContainer">
              <p>Search for {search}</p>
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
           </div>
          }
        </Popover.Content>
      </Popover>
    )
}

export default Search;