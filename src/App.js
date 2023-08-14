import React, { useState } from "react";
import Header from "./Components/Header";
import SavingsInput from "./Components/SavingsInput";
import SavingsResults from "./Components/SavingsResutls";

function App() {
  // Setting the state of the savings data
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };
  const yearlyData = [];

  if (userInput) {
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
  }

  return (
    <div>
      {/* Page header component */}
      <Header />

      {/* User input from */}
      <SavingsInput onSubmit={calculateHandler} />

      {/* Renders a message is there is no user input. */}
      {!userInput && (
        <p style={{ textAlign: "center" }}>No investment calculated yet.</p>
      )}

      {/* Display user savings results */}
      {userInput && (
        <SavingsResults
          data={yearlyData}
          initialInvestment={userInput["current-savings"]}
        />
      )}
    </div>
  );
}

export default App;
