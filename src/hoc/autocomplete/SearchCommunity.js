/* eslint-disable no-use-before-define */
import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import './Search.css';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    '& > * + *': {
      marginTop: theme.spacing(3),
    },
  },
}));

const SearchCommunity = (props) => {
  const classes = useStyles();
  const search = props.communities;

  return (
    <div className={classes.root}>
      <Autocomplete
        id="tags-outlined"
        options={search}
        getOptionLabel={(option) => option.name}
        getOptionSelected={(option, value) => option.name === value.name}
        renderOption={(option, {selected} ) => (
            <div onClick={() => props.onSelectedCategory(option._id)}
              className="AutoCompleteBox">
                <div className="SearchCommunity">
                    <div className="Item">
                        <img alt={option.name} src={option.preview}></img>
                        <h5>{option.name}</h5>
                    </div>
                </div>
            </div>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            onChange={props.handleSearchCommunity}
            label="Select Community"
            placeholder="Favorites"
          />
        )}
      />
    </div>
  );
}

export default SearchCommunity;