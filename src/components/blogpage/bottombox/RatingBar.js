import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

const labels = {
  1: 'Useless',
  2: 'Poor',
  3: 'Ok',
  4: 'Good',
  5: 'Excellent',
};

const useStyles = makeStyles({
  root: {
    width: 200,
    display: 'flex',
    alignItems: 'center'
  },
});

const RatingBar= (props) => {
  const {blogId} = props;
  const [value, setValue] = React.useState(null);
  const [hover, setHover] = React.useState(-1);
  const classes = useStyles();

  const RatingChangeEvent = (event, newValue) => {
    console.log(newValue)
    setValue(newValue)
    if(newValue !== null){
      console.log('hitting like route')
      fetch('https://thawing-reaches-88200.herokuapp.com/me/blog/like', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token')
        },
        body: JSON.stringify({
            blogId: blogId,
            score: newValue
        })
      })
      .then(res => {
          return res.json();
      })
      .then(result => {
          console.log(result)
      })
    }else{
      console.log('hitting unlike route')
      fetch('https://thawing-reaches-88200.herokuapp.com/me/blog/unlike', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + localStorage.getItem('token')
          },
          body: JSON.stringify({
              blogId: blogId
          })
        })
        .then(res => {
            return res.json();
        })
        .then(result => {
            console.log(result)
        })
    }
  }


  return (
    <div className={classes.root}>
      <Rating
        name="hover-feedback"
        value={value}
        precision={1}
        onChange={(event, newValue) => RatingChangeEvent(event, newValue)}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
      />
      {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
    </div>
  );
}

export default RatingBar;