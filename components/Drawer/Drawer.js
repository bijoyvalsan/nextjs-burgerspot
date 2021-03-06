import React from "react";
import styles from './Drawer.module.css'

const Drawer = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      {children}
    </div>
  );
};

export default Drawer;
