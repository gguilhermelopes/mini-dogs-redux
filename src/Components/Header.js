import React from "react";
import Logout from "./Logout";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Mini Dogs</h1>
      <Logout />
    </header>
  );
};

export default Header;
