
//Impuestos dependiendo del tipo de producto
const vatDefault = 0.21; //
const vatFood = 0.10;
const vatBook = 0.04;

//Productos
const product_1 = { count: 3, price: 12.55, type: "electronics" };
const product_2 = { count: 10, price: 2.99, type: "food" };
const product_3 = { count: 5, price: 19.99, type: "book" };

//Función que calcula el total del producto sumandole su correspondiente iva
function getTotal(product) {

    if (product.count < 0) return 0;

    const subTotal = product.count * product.price;
    vat = 0;

    switch (product.type) {
        case "food":
            vat = subTotal * vatFood;
            break;

        case "book":
            vat = subTotal * vatBook;
            break;

        default:
            vat = subTotal * vatDefault
            break;
    }

    return subTotal + vat;
}

const totalProduct = getTotal(product_3);
console.log('Total producto:', totalProduct, '€');


//Función que calcula el iva de un producto
function getVat(product) {
    if (product.price <= 0) return 0;

    switch (product.type) {
        case "food":
            return product.price * vatFood;

        case "book":
            return product.price * vatBook;

        default:
            return product.price * vatDefault;
    }
}

const vatProduct = getVat(product_1)
console.log('IVA del producto:',vatProduct,'€')
