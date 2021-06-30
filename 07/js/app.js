// ### VALIDAR IBAN ###
// Caso 1
const validateIBAN_1 = (iban) => {
    const pattern = /^([A-Z]{2})(\d{22})$/;
    return pattern.test(iban);
}
console.log(validateIBAN_1('ES6600190020961234567890'));

// Caso 2
const validateIBAN_2 = (iban) => {
    const pattern = /^([A-Z]{2}\d{2})(\s?\d{4}){5}$/;
    return pattern.test(iban);
}
console.log(validateIBAN_2('ES66 0019 0020 9612 3456 7890'));

// Caso 3
const getCountryCodeAndControlDigit = (iban) => {
    const pattern = /^([A-Z]{2}\d{2})(\s?\d{4}){5}$/;
    const data = pattern.exec(iban)[1];
    return [data.slice(0, 2), data.slice(2, 4)]
}
console.log(getCountryCodeAndControlDigit('ES66 0019 0020 9612 3456 7890'))


// ### VALIDAR MATRÍCULA ###
// Caso 1
const validateMatricula = (matricula) => {
    const pattern = /^(\d{4})(\s|-)?([A-Z]{3})$/;
    return pattern.test(matricula);
}
const matriculas = ['2021 GMD', '2345-GMD', '4532BDB', '0320-AAA'];

matriculas.forEach(mat => {
    console.log(validateMatricula(mat));
});

// Caso 2
const getMatricula = (matricula) => {
    const pattern = /^(\d{4})(\s|-)?([A-Z]{3})$/;

    return [pattern.exec(matricula)[1], pattern.exec(matricula)[3]]
}
console.log(getMatricula('0320-AAA'));



// ### EXTRAER IMAGENES FICHERO HTML ###
// Caso 1
const src = document.getElementsByTagName('img')[0].src;
console.log(src)

// Caso 2
const imgs = document.getElementsByTagName('img');
const srcImgs = [];

for (const img of imgs) {
    srcImgs.push(img.src)
}
console.log(srcImgs)


// ### VALIDAR TARJETA DE CRÉDITO ###
// Caso 1
const validateCreditCard = (creditCard) => {
    const pattern = /^([3-7]\d{3})((\s|-)?\d{4}){3}$/;
    return pattern.test(creditCard);
}
const cards = ['5299 6400 0000 0000', '5299-6400-0000-0000', '5299640000000000']

cards.forEach(card => {
    console.log(validateCreditCard(card))
});

// Caso 2
const getDigitsCreditCard = (creditCard) => {
    const pattern = /^([3-7]\d{3})((\s|-)?\d{4}){3}$/;

    return pattern.exec(creditCard)[0]
        .replace(/ |-/g, '') // Eliminamos espacios y guiones si los hubiera
        .match(/.{1,4}/g); // Separamos cada grupo de cuatro digitos
}
console.log(getDigitsCreditCard('5299-6400 0000-0000'))


// ### BUSCAR EXPRESIONES REGULARES ###
// Validar clave compleja: que tenga al menos los siguiente caracteres: una minuscula, una mayuscula, un numero y un caracter especial.
const patternHighPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,64}$/;

// Validar clave moderada: Que tenga al menos los siguientes caracteres: una minuscula, una mayuscula, un numero y al menos 8 caracteres de longitud.
const patternLowPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,15}$/;

//Validar URL
const patternURL = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig;

//Validar color hexadecimal
const pattenHexColor = /^#?([0-9a-f]{3}){1,2}$/i;