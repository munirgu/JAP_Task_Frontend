import axios from "axios";
import { useState, useEffect } from "react";
import SingleContent from "../components/SingleContent/SingleContent";
import classes from './../App.module.css';
import CustomPagination from "../components/Pagination/CustomPagination";
import { CenterFocusStrong } from "@material-ui/icons";
import Search from "./Search";



const Movies = () => {

    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [displayShowMoreButton, setdisplayShowMoreButton] = useState(true);

    const fetchMovies = async()=>{
        const {data} = await axios.get('https://localhost:5001/videos/get-top-ten-movies?currentPage='+page);
        
        var newContent = [...content,...data];
        setContent(newContent);
        setdisplayShowMoreButton(data.length>0)
    };

    useEffect(() => {
        fetchMovies();
    }, [page]);

    const showMore = ()=>{
        setPage(page+1);
    }

      //(<SingleContent key={c.id} id={c.id} 
              //  title={c.title} description={c.description} 
                //releaseDate={c.releaseDate} imageUrl={c.imageUrl} 
                //actors={c.actors} rating={c.rating}/>))

    return (
        <div>
        
            <span className={classes.pageTitle}>Movies</span>
            <div className={classes.movies}>
            {content && content.map(
               function(c){
                var releaseDate=new Date(c.releaseDate);
                return <SingleContent key={c.id} id={c.id} 
                  title={c.title} description={c.description} 
                  releaseDate={releaseDate.toLocaleDateString('da-DK')} imageUrl={c.imageUrl} 
                  actors={c.actors} rating={c.rating}/>;
               })}
               
                </div>
            {displayShowMoreButton && <button className={classes.button} onClick={showMore}>View More</button>}
            
            </div>

    )
}

export default Movies
