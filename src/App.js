import React from "react";
import Header from "./Components/Header";
import SavingsInput from "./Components/SavingsInput";
import SavingsResults from "./Components/SavingsResutls";

function App() {
  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    console.log(userInput);

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

    // do something with yearlyData ...
  };

  return (
    <div>
      {/* Page header component */}
      <Header />

      {/* User input from */}
      <SavingsInput submit={calculateHandler} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      {/* Display user savings results */}
      <SavingsResults />
    </div>
  );
}

export default App;
