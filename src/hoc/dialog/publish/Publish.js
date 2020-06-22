import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

import SearchTags from '../../autocomplete/SearchTags';
import SearchCommunity from '../../autocomplete/SearchCommunity';
import PublishImageList from './PublishImageList';

const Publish = (props) => {
    
    const { open, handleClose, handleSearchHashtags, handleSearchCommunity, communities, hashtags,
       onSelectedCategory, onSelectedTag, checkedA, handleChecked, onInputChange, imagesList, 
       clickPreview, errorTitle, errorDesc, disablePublishBtn} = props;

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <div style={{position: 'relative'}}>
          <img 
              style={{width: '100%', height: '200px', objectFit: 'cover'}}
              src={props.image} alt="publish preview"></img>
            {imagesList.length <= 1?
              "":
            <PublishImageList
              clickPreview={clickPreview} 
              images={imagesList} />
            }
        </div>
        <DialogTitle id="form-dialog-title">Publish</DialogTitle>
        <DialogContent>
          <div>
            <FormControlLabel
              control={
                <Switch name="checkedA" 
                  checked={checkedA}
                  onChange={handleChecked}/>
                }
              label="Publish with community"
            />
            {checkedA?
            <SearchCommunity 
              handleSearchCommunity={handleSearchCommunity}
              onSelectedCategory={onSelectedCategory}
              communities={communities}/>:
              ''
            }
          </div>
          <TextField
            error ={errorTitle}
            autoFocus
            helperText="at least 6 characters"
            margin="dense"
            id="title"
            name="title"
            label="Title"
            onChange={onInputChange}
            type="text"
            fullWidth
          />
          <TextField
            error={errorDesc}
            helperText="at least 12 characters"
            margin="dense"
            id="desc"
            name="desc"
            label="Description"
            onChange={onInputChange}
            type="text"
            fullWidth
          />
          <SearchTags 
              handleSearchHashtags={handleSearchHashtags}
              onSelectedTag={onSelectedTag}
              hashtags={hashtags}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={props.handlePublishBlog} color="primary" disabled={disablePublishBtn}>
            Publish
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Publish;