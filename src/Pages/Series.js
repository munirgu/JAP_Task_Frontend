import axios from "axios";
import { useState, useEffect } from "react";
import SingleContent from "../components/SingleContent/SingleContent";
import classes from './../App.module.css';
import Search from "./Search";


const Series = () => {
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [displayShowMoreButton, setdisplayShowMoreButton] = useState(true);

    const fetchSeries = async(searchText)=>{
        var url="";
        var issearch= searchText && searchText.length>1;
               if(issearch){
                   
                   url='https://localhost:5001/videos/search-show-videos?quickSearch='+searchText;
                   setPage(1);
               }
               else{
                   url='https://localhost:5001/videos/get-top-ten-shows?currentPage='+page;
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
        fetchSeries();
        // eslint-disable-next-line
    }, []);

    const showMore = ()=>{
        setPage(page + 1);
        fetchSeries();
    }

    const onSearch =(searchText)=>{
        fetchSeries(searchText);
    
    }
    return (
        <div>
            <Search onSearch={onSearch}/>
            <span className={classes.pageTitle}>Series</span>
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

export default Series