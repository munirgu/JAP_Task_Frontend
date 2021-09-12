import classes from "./Header.module.css";

const Header = () => {
  return (
      <span onClick ={()=> window.scroll(0,0)} className={classes.header}>🎬 Movie Application 🎥</span>
  );
};

export default Header;