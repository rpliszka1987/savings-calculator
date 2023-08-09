import React, { useState } from "react";
import ResetButton from "./ResetButton";
import Button from "./Button";
import styles from "./SavingsInput.module.css";

const initialUserInput = {
  "current-savings": 10000,
  "yearly-contribution": 1200,
  "expected-return": 7,
  duration: 10,
};

function SavingsInput(props) {
  // Setting state for user input state
  const [userInput, setUserInput] = useState(initialUserInput);

  const userInputData = (input, value) => {
    setUserInput((prevInput) => {
      return {
        // Copy previous state
        ...prevInput,
        // sets new value fro object property
        [input]: +value,
      };
    });
  };

  const formSubmitHandler = (event) => {
    // Stops default form handling
    event.preventDefault();

    props.onSubmit(userInput);
  };

  // Clears all the forms input data
  const clearFormHandler = () => {
    setUserInput(initialUserInput);
  };

  return (
    <form className={styles.form} onSubmit={formSubmitHandler}>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={userInput["current-savings"]}
            onChange={(event) =>
              userInputData("current-savings", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={userInput["yearly-contribution"]}
            onChange={(event) =>
              userInputData("yearly-contribution", event.target.value)
            }
          />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={userInput["expected-return"]}
            onChange={(event) =>
              userInputData("expected-return", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={userInput.duration}
            onChange={(event) => userInputData("duration", event.target.value)}
          />
        </p>
      </div>
      <p className={styles.actions}>
        <ResetButton clearForm={clearFormHandler} />

        {/* Submit button passing down function from App.js */}
        <Button submitForm={props.submit} />
      </p>
    </form>
  );
}

export default SavingsInput;
