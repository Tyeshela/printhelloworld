function calculator() {
    const operation = prompt("Choose an operation: +, -, *, /");
    const firstNumber = parseFloat(prompt("Enter the first number:"));
    const secondNumber = parseFloat(prompt("Enter the second number:"));

    let result;

    switch (operation) {
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
        case '/':
            if (secondNumber !== 0) {
                result = firstNumber / secondNumber;
            } else {
                result = "Division by zero is not allowed.";
            }
            break;
        default:
            result = "Invalid operation";
    }

    console.log(`Result: ${result}`);
}

calculator();
