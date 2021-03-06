import React from "react";
import styles from './Button.module.css'

const Button = ({ children, onClick, showButtonBackground = true }) => {
  return (
    <div className={styles.button_wrapper}>
      <button className={styles.button} onClick={onClick} tabIndex="0">
        {children}
      </button>
      {showButtonBackground &&
        <div className={styles.button_back}>
          <div className={styles.button_back_color}>

          </div>
        </div>
      }
    </div>
  );
};

export default Button;
