import classes from "./SingleContent.module.css"
import { Badge } from "@material-ui/core"
import ContentModal from "../ContentModal/ContentModal"
import AddRating from "../../Pages/AddRating"

const SingleContent = (props) => {
    return (
        <div className={classes.media} id={props.id}>
         <Badge badgeContent={props.rating} color={props.rating>3? "primary": "secondary"}/>  
         <img className={classes.image} src={props.imageUrl} alt={props.title}/>
         <b className={classes.title}>{props.title}</b>
         <span className={classes.date} >{props.releaseDate }</span>
         <AddRating className={classes.rating} key={props.id} videoId={props.id}/>
        </div>
    )
}
export default SingleContent
