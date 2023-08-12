import React from "react";
import styles from "./SavingsResults.module.css";

// Formats the currency in the output in the table.
const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

function SavingsResults(props) {
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
        {props.data.map((item) => (
          <tr key={item.year}>
            <td>{item.year}</td>
            <td>{formatter.format(item.savingsEndOfYear)}</td>
            <td>{formatter.format(item.yearlyInterest)}</td>
            <td>
              {formatter.format(
                item.savingsEndOfYear -
                  props.initialInvestment -
                  item.yearlyContribution * item.year
              )}
            </td>
            <td>
              {formatter.format(
                props.initialInvestment + item.yearlyContribution * item.year
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default SavingsResults;
