import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import AddIcon from '@material-ui/icons/Add';
import { blue } from '@material-ui/core/colors';

import { useHistory } from 'react-router-dom';


const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});


function SelectHashtagPage(props) {
    const history = useHistory();
  const classes = useStyles();
  const { show, hashtags } = props;

  const jumpToHashtagPage = (id) => {
      history.push('/cribe-client/hashtag/page/'+id);
  }

  return (
    <Dialog onClose={props.handleClose} aria-labelledby="simple-dialog-title" open={show}>
      <DialogTitle id="simple-dialog-title">Select Hashtag</DialogTitle>
      <List>
        {hashtags.map((hashtag) => (
          <ListItem onClick={() => jumpToHashtagPage(hashtag._id)} button key={hashtag._id}>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>#</Avatar>
            </ListItemAvatar>
            <ListItemText primary={hashtag.name} />
          </ListItem>
        ))}

        <ListItem autoFocus button>
          <ListItemAvatar>
            <Avatar>
              <AddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Create new hashtag" />
        </ListItem>
      </List>
    </Dialog>
  );
}

export default SelectHashtagPage;