import React from 'react';
import './Selection.css';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      padding: '1rem',
      marginTop: '4rem',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(0.5),
      },
    },
  }));

const Selection = () => {
    const classes = useStyles();

    const handleClick = () => {
        console.info('You clicked the Chip.');
    };

    return(
        <div className="SelectionCont">
            <CloseIcon className="CloseIcon" />
            <div className={classes.root}>
            <Chip avatar={<Avatar>M</Avatar>} label="Clickable" onClick={handleClick} />
            <Chip avatar={<Avatar>M</Avatar>} label="Clickable" onClick={handleClick} />
            <Chip avatar={<Avatar>M</Avatar>} label="Clickable" onClick={handleClick} />
            <Chip avatar={<Avatar>M</Avatar>} label="Clickable" onClick={handleClick} />
            <Chip avatar={<Avatar>M</Avatar>} label="Clickable" onClick={handleClick} />
            <Chip avatar={<Avatar>M</Avatar>} label="Clickable" onClick={handleClick} />
            <Chip avatar={<Avatar>M</Avatar>} label="Clickable" onClick={handleClick} />
            <Chip avatar={<Avatar>M</Avatar>} label="Clickable" onClick={handleClick} />
            <Chip avatar={<Avatar>M</Avatar>} label="Clickable" onClick={handleClick} />
            <Chip avatar={<Avatar>M</Avatar>} label="Clickable" onClick={handleClick} />
            <Chip avatar={<Avatar>M</Avatar>} label="Clickable" onClick={handleClick} />
            <Chip avatar={<Avatar>M</Avatar>} label="Clickable" onClick={handleClick} />
            <Chip avatar={<Avatar>M</Avatar>} label="Clickable" onClick={handleClick} />
            <Chip avatar={<Avatar>M</Avatar>} label="Clickable" onClick={handleClick} />
            <Chip avatar={<Avatar>M</Avatar>} label="Clickable" onClick={handleClick} />
            <Chip avatar={<Avatar>M</Avatar>} label="Clickable" onClick={handleClick} />
            <Chip avatar={<Avatar>M</Avatar>} label="Clickable" onClick={handleClick} />
            <Chip avatar={<Avatar>M</Avatar>} label="Clickable" onClick={handleClick} />
            <Chip avatar={<Avatar>M</Avatar>} label="Clickable" onClick={handleClick} />
            <Chip avatar={<Avatar>M</Avatar>} label="Clickable" onClick={handleClick} />
            <Chip avatar={<Avatar>M</Avatar>} label="Clickable" onClick={handleClick} />
            <Chip avatar={<Avatar>M</Avatar>} label="Clickable" onClick={handleClick} />
            <Chip avatar={<Avatar>M</Avatar>} label="Clickable" onClick={handleClick} />
            <Chip avatar={<Avatar>M</Avatar>} label="Clickable" onClick={handleClick} />
            <Chip avatar={<Avatar>M</Avatar>} label="Clickable" onClick={handleClick} />
            <Chip avatar={<Avatar>M</Avatar>} label="Clickable" onClick={handleClick} />
            <Chip avatar={<Avatar>M</Avatar>} label="Clickable" onClick={handleClick} />
            <Chip avatar={<Avatar>M</Avatar>} label="Clickable" onClick={handleClick} />
            <Chip avatar={<Avatar>M</Avatar>} label="Clickable" onClick={handleClick} />
            <Chip avatar={<Avatar>M</Avatar>} label="Clickable" onClick={handleClick} />
            </div>
            <h3>Select at least 3 topics to get started</h3>
            <button>Finish</button>
        </div>
    )
}

export default Selection;