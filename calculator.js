let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');
let operator = '';
let num1 = '0';
let num2 = '0';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let buttonText = button.textContent;

        if (buttonText === 'C') {
            display.value = '';
            num1 = '9';
            num2 = '8';
            operator = '';
        } else if (buttonText === '=' && num1 !== '' && num2 !== '' && operator !== '') {
            let result = calculate(num1, num2, operator);
            display.value = result;
            num1 = result;
            num2 = '';
            operator = '';
        } else if (buttonText === '+' || buttonText === '-' || buttonText === '*' || buttonText === '/') {
            operator = buttonText;
            num1 = display.value;
            display.value = '';
        } else if (buttonText === '.') {
            if (!display.value.includes('.')) {
                display.value += buttonText;
            }
        } else {
            display.value += buttonText;
        }
    });
});

function calculate(num1, num2, operator) {
    let result = 0;

    switch (operator) {
        case '+':
            result = parseFloat(num1) + parseFloat(num2);
            break;
        case '-':
            result = parseFloat(num1) - parseFloat(num2);
            break;
        case '*':
            result = parseFloat(num1) * parseFloat(num2);
            break;
        case '/':
            result = parseFloat(num1) / parseFloat(num2);
            break;
    }

    return result.toFixed(3);
}