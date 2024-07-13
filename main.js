let expression = '';

function appendToDisplay(value) {
    expression += value;
    document.getElementById('display').value = expression;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        const result = eval(expression);
        expression = result.toString();
        document.getElementById('display').value = expression;
    } catch (error) {
        clearDisplay();
        document.getElementById('display').value = 'Error';
    }
}
