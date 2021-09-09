import axios from "axios";
import { useState, useEffect } from "react";
import SingleContent from "../components/SingleContent/SingleContent";
import './Movies.css'
import classes from './../App.module.css'
import CustomPagination from "../components/Pagination/CustomPagination";

const Series = () => {
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);

    const fetchSeries = async()=>{
        const {data} = await axios.get('https://localhost:5001/videos/get-top-ten-shows');
        //console.log(data);
        setContent(data);
    };

    useEffect(() => {
        fetchSeries();
    }, [page]);

    return (
        <div>
            <span className={classes.pageTitle}>Series</span>
            <div className="movies">
           
            { content && content.map((c)=><SingleContent key={c.id} id={c.id} title={c.title} description={c.description} releaseDate={c.releaseDate} imageUrl={c.imageUrl} actors={c.actors} rating={c.rating}/>)}
            </div>
            <CustomPagination setPage={setPage}/>
        </div>
    )
}

export default Series
