import React from "react";
import styles from "./Button.module.css";

function Button(props) {
  return (
    // When clicking the button calls the submitForm function
    <button type="submit" className={styles.button}>
      Calculate
    </button>
  );
}

export default Button;
