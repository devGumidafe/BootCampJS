const sum = (numberOne, numberTwo) => numberOne + numberTwo;
const minus = (numberOne, numberTwo) => numberOne - numberTwo;
const multiply = (numberOne, numberTwo) => numberOne * numberTwo;
const divide = (numberOne, numberTwo) => numberOne / numberTwo;

const calculator = (numberOne, numberTwo, operation) => {

    switch (operation) {
       case '+':
           return sum (numberOne, numberTwo);
    
           case '-':
            return minus(numberOne, numberTwo);

            case '*':
           return multiply (numberOne, numberTwo);

           case '/':
           return divide (numberOne, numberTwo);
    }
}

const result = calculator(3, 3, '*');

console.log(result);