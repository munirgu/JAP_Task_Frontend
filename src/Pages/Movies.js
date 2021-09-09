import axios from "axios";
import { useState, useEffect } from "react";
import SingleContent from "../components/SingleContent/SingleContent";

const Movies = () => {

    const [content, setContent] = useState([]);

    const fetchMovies = async()=>{
        const {data} = await axios.get('https://localhost:5001/videos/get-top-ten-movies');
        //console.log(data);
        setContent(data);
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    return (
        <div>
            <span className="pageTitle">Movies</span>
            <div className="movie">
           
            { content && content.map((c)=><SingleContent key={c.id} id={c.id} title={c.title} description={c.description} releaseDate={c.releaseDate} imageUrl={c.imageUrl} actors={c.actors} rating={c.rating}/>)}
            </div>
        </div>
    )
}

export default Movies
