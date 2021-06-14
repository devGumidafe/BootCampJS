const inputNumber = document.getElementById('number');
let inputResult = document.getElementById('result');
const buttons = document.querySelectorAll('#btn');

let memory = 0;
inputResult.value = memory;

const calculator = (number, operation) => {

    switch (operation) {
        case '+':
            memory += number;
            inputResult.value = number;
            break;

        case '-':
            memory -= number;
            inputResult.value = number;
            break;

        case '*':
            memory *= number;
            inputResult.value = number;
            break;

        case '/':
            memory /= number;
            inputResult.value = number;
            break;

        case '=':
            inputResult.value = memory;
            break;

        case 'C':
            memory = 0;
            inputResult.value = memory;
            break;
    }
}

buttons.forEach(button => {
    button.addEventListener('click', function () {

        if (inputNumber.value === '' && button.innerText !== '=' && button.innerText !== 'C') {
            alert('Error debe introducir un número');

        } else if (inputNumber.value == 0 && button.innerText === '/') {
            alert('Error no se puede dividir por 0');

        } else if (memory === 0) {
            memory = Number(inputNumber.value);
            inputResult.value = memory;

        } else {
            calculator(Number(inputNumber.value), button.innerText);
        }

        inputNumber.value = '';
    });
})

