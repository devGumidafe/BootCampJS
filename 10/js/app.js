/* 
    1. Implementa una función llamada hasId que admita como parámetro un objeto y compruebe si dicho objeto tiene una propiedad
    llamada id (debe devolver booleano true/false). 
*/
const person = {
    id: 10,
    name: 'Elon',
    lastname: 'Reeve Musk',
    age: 50,
}

const hasId = (props) => props.hasOwnProperty('id');
console.log(hasId(person));


/* 
    2. Implementa una función llamada head tal que, dado un array como entrada, devuelva el primer elemento.
*/
const companyList = ['Samsung', 'Apple', 'LG', 'Google', 'Sony', 'Xiaomi'];

const head = ([first]) => first;
console.log(head(companyList));


/* 
    3. Implementa una función llamada tail tal que, dado un array como entrada, 
    devuelva un nuevo array con todos los elementos menos el primero. 
*/
const tail = ([, ...props]) => props;
console.log(tail(companyList));


/*
    4. Implementa una función llamada swapFirstToLast tal que, dado un array como entrada, devuelva un nuevo array donde el
    primer elemento ha sido colocado en la última posición.
*/
const swapFirtToLast = ([first, ...props]) => props.concat(first);
console.log(swapFirtToLast(companyList));


/* 
   5. Implementa una función llamada excludeId tal que, dado un objeto como entrada, devuelva dicho 
    objeto clonado excepto la propiedad id si la hubiera.
 */
const excludeId = ({ id, ...props }) => props;
console.log(excludeId(person));


/* 
    6. Implementa una función llamada wordsStartingWithA tal que, dado un array de palabras como entrada, 
    devuelva otro array filtrado con aquellas palabras que empiecen por a. 
    */
const countries = ['Argentina', 'España', 'Alemania', 'Francia', 'Austria', 'Portugal'];

const wordsStartingWithA = (props) => props.filter(prop => prop[0].toUpperCase() === 'A');
console.log(wordsStartingWithA(countries));


/*
    7. Implementa una función llamada concat tal que admita múltiples argumentos de tipo string y devuelva otro string con la
    concatenación de todos, separados por  |
*/
const concat = (...props) => props.reduce((sumLetters, props) => sumLetters += props + '|', '');
console.log(concat('Resultado', 'ejercicio', 'juntar palabras'));


/* 
    8. Implementa una función llamada multArray que admita un array de números (arr) y otro parámetro que sea un número (x) y 
    devuelva un nuevo array donde cada elemento ha sido multiplicado por x. 
*/
const numberArray = [2, 8, 30, 40, 50, 3, -1];

const multArray = (numArray, num) => numArray.reduce((total, numArray) => total += numArray * num, 0)
console.log(multArray(numberArray, 3));



/* 
    9. Implementa una función llamada calcMult que admita múltiples números como argumento 
    y devuelva como resultado el producto de todos ellos. 
*/
const calcMult = (...props) => props.reduce((total, props) => total *= props, 1)
console.log(calcMult(10,25,5,4))