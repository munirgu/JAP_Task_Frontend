import { TextField, createTheme} from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import classes from "./Search.module.css";

const Search = (props) => {
  const darkTheme = createTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#fff",
      },
    },
  });
const onTextChange = (e)=>{
    const {onSearch} = props;
    onSearch(e.target.value);
}
    return (
        <div>
        <ThemeProvider theme={darkTheme}>
          <div className={classes.search}>
            <TextField
              style={{ flex: 1 }}
              className="searchBox"
              label="Search"
              variant="filled"
              onChange={onTextChange}
            />
          </div>
        </ThemeProvider>
        </div>
         );
    };
export default Search