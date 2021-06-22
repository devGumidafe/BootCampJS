
// Impuestos dependiendo del tipo de producto
const vatDefault = 0.21; // iva por defecto
const vatFood = 0.10; // iva alimentación
const vatBook = 0.04; // iva libros

// Productos
const product_1 = { count: 7, price: 12.55, type: "electronics" };
const product_2 = { count: 10, price: 2.99, type: "food" };
const product_3 = { count: 5, price: 19.99, type: "book" };

// Función que calcula el subtotal de un producto
function getTotal(product) {
    return product.count > 0 ? product.count * product.price : 0;
}

// Función que calcula el iva por unidad de un producto
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

// Función que calcula el total del iva de un producto
function getTotalVat(product) {
    return product.count > 0 ? product.count * getVat(product) : 0;
}

// Función que imprime el total e iva de un producto
function printProductPrice(product) {
    const subTotal = getTotal(product);
    const vat = getTotalVat(product);
    const total = subTotal + vat;

    console.log(`Subtotal: ${subTotal} €`);
    console.log(`IVA: ${vat} €`);
    console.log(`Total: ${total} €`);
}

console.log('---EJERCICIO CALCULAR PRECIO---');
printProductPrice(product_1);



