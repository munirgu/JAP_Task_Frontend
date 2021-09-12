import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import { useState,useEffect } from 'react';
import axios from "axios";
import "./Button.css"


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
   
  
  },
}));

export default function AddRating(props) {
  const classes = useStyles();


  const addRating = async(score) => {
    await axios.post('https://localhost:5001/videos/rate-video?id=' + props.videoId + '&score=' + score);
    };
 
  return (
    <div className={classes.root} style={{ display: "inline-block" }}>
      <button className="button-rating" onClick={(e) => addRating(1)}>1</button>
      <button className="button-rating" onClick={(e) => addRating(2)}>2</button>
      <button className="button-rating" onClick={(e) => addRating(3)}>3</button>
      <button className="button-rating" onClick={(e) => addRating(4)}>4</button>
      <button className="button-rating" onClick={(e) => addRating(5)}>5</button>

      {/* <Rating name="size-small" defaultValue={5} size="small" max={5} precision={1} value={3} onChange={(e, v) => addRating(props.videoId,v)} /> */}
    </div>
  );
}