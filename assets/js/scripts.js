function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    let display = document.getElementById('display').value;
    document.getElementById('display').value = display.substring(0, display.length - 1);
}

function appendNumber(number) {
    document.getElementById('display').value += number;
}

function appendOperator(operator) {
    let display = document.getElementById('display').value;
    if (display.length === 0) return;
    let lastChar = display[display.length - 1];
    if (['+', '-', '*', '/','%'].includes(lastChar)) return;
    document.getElementById('display').value += operator;
}

function calculateResult() {
    let display = document.getElementById('display').value;
    try {
        document.getElementById('display').value = eval(display);
    } catch (e) {
        alert('Invalid Expression');
    }
}
