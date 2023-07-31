import React from "react";
import styles from './ResetButton.module.css';

function ResetButton(props) {
  return (
    <button type="reset" className={styles.buttonAlt} onClick={props.clearForm}>
      Reset
    </button>
  );
}

export default ResetButton;
