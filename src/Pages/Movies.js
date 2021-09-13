import axios from "axios";
import { useState, useEffect } from "react";
import SingleContent from "../components/SingleContent/SingleContent";
import classes from './../App.module.css';
import Search from "./Search";



const Movies = () => {

    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [displayShowMoreButton, setdisplayShowMoreButton] = useState(true);

    const fetchMovies = async(searchText)=>{
        var url="";
        var issearch= searchText && searchText.length>1;
               if(issearch){
                    url='https://localhost:5001/videos/search-movie-videos?quickSearch='+searchText;
                    setPage(1);
               }
               else{
                    url='https://localhost:5001/videos/get-top-ten-movies?currentPage='+page;
               }
               const {data} = await axios.get(url);
               var newContent=[];
        
                if(searchText && searchText.length > 0){
                    newContent = [...data];
                }
                else  {  
                    newContent = [...content,...data.filter((a)=>!content.find((c)=>c.id === a.id ))];
                }
        setContent(newContent);
        setdisplayShowMoreButton(!issearch && data.length >0);
        
    };

    useEffect(() => {
        fetchMovies();
        // eslint-disable-next-line
    }, []);

    
    const showMore = ()=>{
        setPage(page + 1);
        fetchMovies();
    }
    
    const onSearch =(searchText)=>{
        fetchMovies(searchText);
    }

    return (
        <div>
            <Search onSearch={onSearch}/>
            <span className={classes.pageTitle}>Movies</span>
            <div className={classes.movies}>
            {content && content.map(
                function(c,i){
                var releaseDate=new Date(c.releaseDate);
                return <SingleContent key={i} id={c.id} 
                  title={c.title} description={c.description} 
                  releaseDate={releaseDate.toLocaleDateString('da-DK')} imageUrl={c.imageUrl} 
                  actors={c.actors} rating={c.rating}/>;
                })
            }
            </div>
            {displayShowMoreButton && <button className={classes.button} onClick={showMore}>View More</button>}
        </div>

    )
}
export default Movies