/* 
    1. Implementa una función swapFirstSecond tal que dado un array, devuelva un nuevo array 
    donde el primer elemento ha sido intercambiado por el segundo. 
*/
const names = ['Ana', 'Maria', 'Juan', 'Armando', 'Sofia', 'Jesus'];

const swapFirstSecond = ([first, second, ...props]) => [second, first, ...props];
console.log(swapFirstSecond(names))


/* 
    2. Implementa una función firstEqual tal que admita multiples strings como argumento de entrada así como un carácter cualquiera, 
    y devuelva un booleano indicando si todos los strings comienzan por dicho carácter o no. 
*/

const firstEqual = (char, ...props) => props.every(prop => prop[0].toLowerCase() === char.toLowerCase());
console.log(firstEqual('J', 'Javascript', 'Java', 'Jquery'));


/*
    3. Implementa una función longest que admita múltiples arrays como entrada, y devuelva el array más largo.
*/
const longest = (...props) =>
    Array.from(props)
        .reduce((a, b) => a.length > b.length ? a : b);

console.log('Multiples:', longest([1, 2, 3, 20, 20, 29], [5, 6, 7, 8, 9], [4, 2], [5, 6, 7, 8]));


/* 
    4. Implementa una función llamada searchInStringV1 tal que dado un string como parámetro y 
    también un carácter, devuelva cuantas veces aparece dicho carácter en el string.
 */
const searchInStringV1 = (props, char) =>
    Array.from(props)
        .reduce((total, prop) => total = prop.toLowerCase() === char.toLowerCase() ? total + 1 : total, 0)

console.log(searchInStringV1('America', 'a'))


/* 
    5. Implementa el mismo ejercicio de antes, llamando a la función searchInStringV2, 
    encontrando otra alternativa sin usar reduce.
 */
const searchInStringV2 = (props, char) => {
    const newArray = Array.from(props);
    let total = 0;
    newArray.map(arr => arr.toLowerCase() === char.toLowerCase() ? total++ : total)
    return total;
}
console.log(searchInStringV2('Maria Fernanda', 'a'));


/*
    6. Implementa una función llamada sortCharacters tal que dado un string,
    lo devuelva con sus letras ordenadas alfabéticamente.
*/
const sortCharacters = (props) =>
    Array.from(props)
        .sort()
        .join('');
console.log(sortCharacters('supercalifragilisticoespialidoso'))


/*
    7. Implementa una función llamada shout tal que, dadas múltiples palabras como entrada, devuelva todas las
    palabras concatenadas en un texto donde aparezcan en mayúsculas y con exclamaciones.
 */
const shout = (...props) =>
    Array.from(props)
        .join('!')
        .toLocaleUpperCase();

console.log(shout('variables', 'constantes', 'bucles', 'funciones'))


// Lista de la compra
const shoppingCart = [
    { category: "Frutas y Verduras", product: "Lechuga", price: 0.8, units: 1 },
    { category: "Carne y Pescado", product: "Pechuga pollo", price: 3.75, units: 2 },
    { category: "Droguería", product: "Gel ducha", price: 1.15, units: 1 },
    { category: "Droguería", product: "Papel cocina", price: 0.9, units: 3 },
    { category: "Frutas y Verduras", product: "Sandía", price: 4.65, units: 1 },
    { category: "Frutas y Verduras", product: "Puerro", price: 4.65, units: 2 },
    { category: "Carne y Pescado", product: "Secreto ibérico", price: 5.75, units: 2 },
];

// A.Obtén una nueva lista donde aparezca el IVA(21 %) de cada producto.
const addIVA = (props) =>
    props.map(prop => {
        const IVA = (prop.price * prop.units) * 0.21;
        return { ...prop, IVA }
    });

const listWithIVA = addIVA(shoppingCart);
console.log('Lista con IVA', listWithIVA);


// B.Ordena la lista de más a menos unidades.
const sortList = (props) => props.sort((a, b) => b.units - a.units);
console.log('Lista ordenada de más a menos uds', sortList(shoppingCart));

// C.Obtén el subtotal gastado en droguería.
const subTotal = (props) =>
    props.filter(prop => prop.category === 'Droguería')
        .reduce((total, prop) => total += (prop.price * prop.units) + prop.IVA, 0);

console.log('Subtotal droguería', subTotal(listWithIVA).toFixed(2) + '€');

// D.Obtén la lista por consola en formato "Producto -> Precio Total €" y ordenada por categoría.
const total = (props) =>
    props.sort((a, b) => (a.category > b.category ? 1 : -1))
        .map(prop => {
            const totalProduct = (prop.price * prop.units) + prop.IVA;

            console.log(`Producto -> ${prop.product} -> Total: ${totalProduct.toFixed(2)}€`);

            return totalProduct;
        })
        .reduce((total, prop) => total += prop, 0);

console.log('Total compra:', total(listWithIVA).toFixed(2) + '€')
