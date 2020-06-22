import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import SearchUser from '../autocomplete/SearchUser';

const CreateCommunity = (props) => {
    
    const { open, handleClose, onInputChange, url, handleSearchUser, search,
        onSelectedCategory } = props;

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <img 
            style={{width: '100%', height: '200px', objectFit: 'cover'}}
            src={url} alt="CreateCommunity preview"></img>
        <DialogTitle id="form-dialog-title">CreateCommunity</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Provide valid information to CreateCommunity the blog
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="url"
            name="url"
            label="Url"
            type="text"
            onChange={onInputChange}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            name="name"
            label="Community Name"
            type="text"
            onChange={onInputChange}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="description"
            name="description"
            label="Description"
            type="text"
            onChange={onInputChange}
            fullWidth
          />
          <br></br><br></br>
          <p style={{margin: '0'}}>Invite people to join the community</p>
          <SearchUser 
            onSelectedCategory={onSelectedCategory}
            handleSearchUser={handleSearchUser} 
            search={search}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={props.handleCreateCommunity} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CreateCommunity;