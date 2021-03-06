let expression = '';

function registerInput(input) {
    expression += input;
    document.getElementById('resultWindow').value = expression;
}

function clearWindow() {
    document.getElementById('resultWindow').value = '0';
    expression = null;
    expression = '';
}

function getResult() {
    document.getElementById('resultWindow').value = math.evaluate(expression);
}

function changeSign() {
    let value = parseInt(expression, 10);
    value = value * -1;
    expression = value;
    document.getElementById('resultWindow').value = expression;
}

function percentage() {
    let value = parseInt(expression, 10);
    value = value / 100;
    expression = value;
    document.getElementById('resultWindow').value = expression;
}