import axios from "axios";
import { useState, useEffect } from "react";
import SingleContent from "../components/SingleContent/SingleContent";

const Series = () => {

    const [content, setContent] = useState([]);

    const fetchSeries = async()=>{
        const {data} = await axios.get('https://localhost:5001/videos/get-top-ten-shows');
        //console.log(data);
        setContent(data);
    };

    useEffect(() => {
        fetchSeries();
    }, []);

    return (
        <div>
            <span className="pageTitle">Series</span>
            <div className="series">
           
            { content && content.map((c)=><SingleContent key={c.id} id={c.id} title={c.title} description={c.description} releaseDate={c.releaseDate} imageUrl={c.imageUrl} actors={c.actors} rating={c.rating}/>)}
            </div>
        </div>
    )
}

export default Series
