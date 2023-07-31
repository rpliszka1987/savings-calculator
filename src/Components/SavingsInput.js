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

  const currentSavingsHandler = (event) => {
    setCurrentSavings(event.target.value);
  };

  const currentContributionHandler = (event) => {
    setYearlyContribution(event.target.value);
  };

  const expectedReturnHandler = (event) => {
    setExpectedReturn(event.target.value);
  };

  const durationHandler = (event) => {
    setDuration(event.target.value);
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
            value={currentSavings}
            onChange={currentSavingsHandler}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={yearlyContribution}
            onChange={currentContributionHandler}
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
            value={expectedReturn}
            onChange={expectedReturnHandler}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={duration}
            onChange={durationHandler}
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
