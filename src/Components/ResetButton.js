import React from "react";

function ResetButton(props) {
  return (
    <button type="reset" className="buttonAlt" onClick={props.clearForm}>
      Reset
    </button>
  );
}

export default ResetButton;
