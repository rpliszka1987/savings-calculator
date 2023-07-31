import React from "react";
import styles from "./SavingsResults.module.css";

function SavingsResults(props) {
  // Checks if there is data passed if not displays message
  if (props.savingsData.length === 0) {
    return <h2 className={styles["no-results"]}>No Savings Found</h2>;
  }
  return (
    <table className={styles.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {/* Loops through the data passed in props and outputs to screen */}
        {props.savingsData.map((item) => (
          <tr>
            <td>{item.year}</td>
            <td>{Math.floor(item.savingsEndOfYear)}</td>
            <td>{Math.floor(item.yearlyInterest)}</td>
            <td>{item.yearlyContribution}</td>
            <td>{Math.floor(item.savingsEndOfYear)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default SavingsResults;
