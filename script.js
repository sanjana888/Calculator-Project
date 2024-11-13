// Initialize a variable to store the current input
let currentInput = "";

// Function to handle number and operator input
function input(value) {
  // Append the value to the current input
  currentInput += value;
  updateDisplay(currentInput);
}

// Function to update the display
function updateDisplay(value) {
  document.getElementById("display").innerText = value;
}

// Function to clear the display
function clearDisplay() {
  currentInput = "";
  updateDisplay("0");
}

// Function to evaluate the current input
function calculate() {
  try {
    // Evaluate the expression and update display
    const result = eval(currentInput);
    updateDisplay(result);
    currentInput = result.toString(); // Update the current input with the result
  } catch (error) {
    updateDisplay("Error");
    currentInput = ""; // Reset the input in case of an error
  }
}
