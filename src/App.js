import Header from "./components/Layout/Header";
import classes from "./App.module.css";
import SimpleBottomNavigation from "./components/MainNav";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container } from "@material-ui/core";
import Movies from "./Pages/Movies";
import Search from "./Pages/Search";
import Series from "./Pages/Series";

function App() {
  return (
   
    <BrowserRouter>
      <Header />
      <div className={classes.app}>
      <Container>
          <Switch>
            <Route path="/" component={Movies} exact/>
            <Route path="/series" component={Series} />
            <Route path="/search" component={Search} />
          </Switch>
        </Container>
     </div>

      

      <SimpleBottomNavigation/>
    </BrowserRouter>
   
  );
}
export default App;
