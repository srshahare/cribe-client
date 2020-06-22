/* eslint-disable no-use-before-define */
import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar'

import './Search.css';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    '& > * + *': {
      marginTop: theme.spacing(3),
    },
  },
}));

const SearchUser = (props) => {
  const classes = useStyles();
  const search = props.search;

  return (
    <div className={classes.root}>
      <Autocomplete
        multiple
        id="tags-outlined"
        options={search}
        getOptionLabel={(option) => option.name}
        getOptionSelected={(option, value) => option.name === value.name}
        renderOption={(option, {selected} ) => (
            <div onClick={() => props.onSelectedCategory(option._id)} style={{ width: '100%' }}>
                <div className="SearchUser">
                    <div className="Item">
                        <Avatar alt={option.name} src={option.profile_image}></Avatar>
                        <div>
                            <h5>{option.name}</h5>
                            <p>{option.user_id}</p>
                        </div>
                    </div>
                </div>
            </div>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            onChange={props.handleSearchUser}
            label="Hashtags"
            placeholder="Favorites"
          />
        )}
      />
    </div>
  );
}

export default SearchUser;