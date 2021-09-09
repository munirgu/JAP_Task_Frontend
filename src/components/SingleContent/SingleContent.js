import { img_300 } from "../../config/config"
import classes from "./SingleContent.module.css"
import { Badge } from "@material-ui/core"

const SingleContent = (props) => {
   
    return (
        <div className={classes.media}>
          <Badge badgeContent={props.rating} color={props.rating>6? "primary": "secondary"}/>  
         <img className={classes.image} src={props.imageUrl} alt={props.title}/>
         <b className={classes.title}>{props.title}</b>
         <span className={classes.date}>{props.releaseDate}</span>
    
        </div>
    )
}

export default SingleContent
