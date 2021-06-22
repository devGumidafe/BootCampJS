const inputNumberOne = document.getElementById('numberOne');
const inputNumberTwo = document.getElementById('numberTwo');
const buttons = document.querySelectorAll('#btn');
let result = document.getElementById('result');


const calculator = (numberOne, numberTwo, operation) => {
    switch (operation) {
        case '+':
            return numberOne + numberTwo;

        case '-':
            return numberOne - numberTwo;

        case '*':
            return numberOne * numberTwo;

        case '/':
            return numberOne / numberTwo;
    }
}


buttons.forEach(button => {
    button.addEventListener('click', function () {

        if (inputNumberOne.value === '' || inputNumberTwo.value === '') {
            alert('Error debe introducir dos números');

        } else if (inputNumberTwo.value == 0) {
            alert('Error no se puede dividir por 0');

        } else {
            result.value = calculator(Number(inputNumberOne.value), Number(inputNumberTwo.value), button.innerText);
        }
    });
})

