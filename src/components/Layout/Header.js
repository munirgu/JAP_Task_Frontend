import { Fragment } from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <div>🎬 Movie Application 🎥</div>
      </header>
    </Fragment>
  );
};

export default Header;