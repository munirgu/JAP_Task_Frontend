import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from "axios";
import "./Button.css"
import StarIcon from "@material-ui/icons/Star";
import ToolTip from "@material-ui/core/ToolTip";


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
    alert("You have successfully rated a video. Thank you.")
    };
 
  return (
    <div className={classes.root} style={{ display: "inline-block" }}>
        <ToolTip title="1" placement="top">
            <StarIcon onClick={(e) => addRating(1)}/>
        </ToolTip>
        <ToolTip title="2" placement="top">
            <StarIcon onClick={(e) => addRating(2)}/>
        </ToolTip>
        <ToolTip title="3" placement="top">
            <StarIcon onClick={(e) => addRating(3)}/>
        </ToolTip>
        <ToolTip title="4" placement="top">
            <StarIcon onClick={(e) => addRating(4)}/>
        </ToolTip>
        <ToolTip title="5" placement="top">
            <StarIcon onClick={(e) => addRating(5)}/>
        </ToolTip>
    </div>
  );
}