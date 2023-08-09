import React, { useState } from "react";
import Header from "./Components/Header";
import SavingsInput from "./Components/SavingsInput";
import SavingsResults from "./Components/SavingsResutls";

function App() {
  // Setting the state of the savings data
  const [savingsDataOutput, setSavingsDataOutput] = useState("");


  const calculateHandler = (userInput) => {
    const yearlyData = [];

    let currentSavings = +userInput["current-savings"];
    const yearlyContribution = +userInput["yearly-contribution"];
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput.duration;

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
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
      <SavingsInput onSubmit={calculateHandler} />

      {/* Display user savings results */}
      <SavingsResults savingsData={savingsDataOutput} />
    </div>
  );
}

export default App;
