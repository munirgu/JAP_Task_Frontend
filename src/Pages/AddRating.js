import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  
  },
}));

export default function AddRating() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Rating name="size-small" defaultValue={5} size="small" />
    </div>
  );
}