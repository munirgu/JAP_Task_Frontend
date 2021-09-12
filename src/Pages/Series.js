import axios from "axios";
import { useState, useEffect } from "react";
import SingleContent from "../components/SingleContent/SingleContent";
import classes from './../App.module.css';
import CustomPagination from "../components/Pagination/CustomPagination";
import { CenterFocusStrong } from "@material-ui/icons";



const Series = () => {

    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [displayShowMoreButton, setdisplayShowMoreButton] = useState(true);

    const fetchSeries = async()=>{
        const {data} = await axios.get('https://localhost:5001/videos/get-top-ten-shows?currentPage='+page);
        
        var newContent = [...content,...data];
        setContent(newContent);
        setdisplayShowMoreButton(data.length>0)
    };

    useEffect(() => {
        fetchSeries();
    }, [page]);

    const showMore = ()=>{
        setPage(page+1);
    }



    return (
        <div>
            
        <span className={classes.pageTitle}>Series</span>
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

export default Series
