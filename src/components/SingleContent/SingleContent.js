import { img_300 } from "../../config/config"
import classes from "./SingleContent.module.css"

const SingleContent = (props) => {
   
    return (
        <div className={classes.media}>
         <img className={classes.image} src={props.imageUrl} alt={props.title}/>
         <b className={classes.title}>{props.title}</b>
         <span className={classes.date}>{props.releaseDate}</span>
    
        </div>
    )
}

export default SingleContent
