import React, { useState } from "react";
import ResetButton from "./ResetButton";
import Button from "./Button";
import styles from "./SavingsInput.module.css";

function SavingsInput(props) {
  // Setting state for user input state
  const [currentSavings, setCurrentSavings] = useState("");
  const [yearlyContribution, setYearlyContribution] = useState("");
  const [expectedReturn, setExpectedReturn] = useState("");
  const [duration, setDuration] = useState("");

  const userInputData = (input, value) => {
    console.log(input, value);
  };

  const formSubmitHandler = (event) => {
    // Stops default form handling
    event.preventDefault();

    // Saving all the values in a object
    const savingData = {
      saving: currentSavings,
      year: yearlyContribution,
      return: expectedReturn,
      time: duration,
    };

    // Passing the object back to the main function
    props.submit(savingData);

    // Clearning all the fields
    setCurrentSavings("");
    setYearlyContribution("");
    setExpectedReturn("");
    setDuration("");
  };

  const clearFormHandler = () => {
    setCurrentSavings("");
    setYearlyContribution("");
    setExpectedReturn("");
    setDuration("");
  };

  return (
    <form className={styles.form} onSubmit={formSubmitHandler}>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
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
