import React from "react";

function Button(props) {
  return (
    // When clicking the button calls the submitForm function
    <button type="submit" className="button" onClick={props.submitForm}>
      Calculate
    </button>
  );
}

export default Button;
