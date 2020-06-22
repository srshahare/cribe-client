/* eslint-disable no-use-before-define */
import React, {useEffect} from 'react';
import "./Search.css";
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    '& > * + *': {
      marginTop: theme.spacing(3),
    },
    marginTop: '8px'
  },
}));

const SearchTags = (props) => {
  const classes = useStyles();

  const {handleSearchHashtags, onSelectedTag, hashtags} = props;
  const [options, setOptions] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const loading = open && options.length === 0;

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);
  
  return (
    <div className={classes.root}>
      <Autocomplete
        multiple
        limitTags={3}
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        id="tags-outlined"
        getOptionSelected={(option, value) => option === value}
        getOptionLabel={(option) => option.name}
        options={hashtags}
        loading={loading}
        renderOption={(option, {selected} ) => (
            <div onClick={() => onSelectedTag(option._id)} 
              className="AutoCompleteBox">
                <div className="SearchCommunity">
                    <div className="Item">
                        <h5>{option.name}</h5>
                    </div>
                </div>
            </div>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Select at most 3 tags"
            variant="standard"
            onChange={handleSearchHashtags}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {loading ? <CircularProgress color="inherit" size={20} /> : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            }}
          />
        )}
      />
    </div>
  );
}

export default SearchTags;

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
