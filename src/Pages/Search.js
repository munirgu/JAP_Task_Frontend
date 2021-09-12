import { useState, useEffect } from "react";
import { TextField, createMuiTheme,Button,Tabs,Tab} from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";
import SingleContent from "../components/SingleContent/SingleContent";
import "./Search.css";
import classes from './../App.module.css';

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [content, setContent] = useState([]);

  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#fff",
      },
    },
  });



  const fetchSearch = async () => {
    try {
      var url="https://localhost:5001/videos/get-top-ten-movies";
      if(searchText.length>1){
          url='https://localhost:5001/videos/search-movie-videos?quickSearch='+searchText;
      }
      const { data } = await axios.get(url);
      setContent(data);
      // console.log(data);
    } catch (error) {
        console.error(error);
      }
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchSearch();
  }, [searchText]);

    return (
        <div>
        <ThemeProvider theme={darkTheme}>
          <div className="search">
            <TextField
              style={{ flex: 1 }}
              className="searchBox"
              label="Search Movies"
              variant="filled"
              onChange={(e) => setSearchText(e.target.value)}
            />
            <Button
              onChange={fetchSearch}
              variant="contained"
              style={{ marginLeft: 10 }}
            >
              <SearchIcon fontSize="large" />
            </Button>
          </div>

        </ThemeProvider>
        <div className={classes.movies}>
        {content && content.map(
               function(c){
                var releaseDate=new Date(c.releaseDate);
                return <SingleContent key={c.id} id={c.id} 
                  title={c.title} description={c.description} 
                  releaseDate={releaseDate.toLocaleDateString('da-DK')} imageUrl={c.imageUrl} 
                  actors={c.actors} rating={c.rating}/>;
               })} 
          {searchText &&
            !content &&
            (<h2>No Movies Found</h2>)}
        </div>
        
      </div>
    );
  };
export default Search
