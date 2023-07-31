import React, { useState } from "react";
import Header from "./Components/Header";
import SavingsInput from "./Components/SavingsInput";
import SavingsResults from "./Components/SavingsResutls";

function App() {
  // Setting the state of the savings data
  const [savingsDataOutput, setSavingsDataOutput] = useState("");

  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    // Assigns all the values from the form to appropriate field.
    let currentSavings = +userInput.saving;
    const yearlyContribution = +userInput.year;
    const expectedReturn = +userInput.return / 100;
    const duration = +userInput.time;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    // Setting the state value of the savings data.
    setSavingsDataOutput(yearlyData);
  };

  return (
    <div>
      {/* Page header component */}
      <Header />

      {/* User input from */}
      <SavingsInput submit={calculateHandler} />

      {/* Display user savings results */}
      <SavingsResults />
    </div>
  );
}

export default App;
