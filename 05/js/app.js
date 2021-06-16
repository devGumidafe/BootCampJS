// Variables
const table = document.getElementById('myTable');
const shipping = document.getElementById('shipping');
const discount = document.getElementById('discount');
const subTotal = document.getElementById('subTotal');
const total = document.getElementById('total');

// Objeto
let cart = [
    {
        id: 457,
        name: 'Tarjeta de sonido',
        price: 20,
        count: 2,
        prime: true
    },
    {
        id: 721,
        name: 'Placa base',
        price: 77.42,
        count: 4,
        prime: false
    },
    {
        id: 358,
        name: 'Procesador',
        price: 196.90,
        count: 2,
        prime: true
    },
    {
        id: 689,
        name: 'Tarjeta Grafica',
        price: 51.30,
        count: 3,
        prime: true
    }
]

// Elimina un producto, vuelve a dibujar la tabla y a calcula el precio del carrito
const deleteProduct = (id) => {
    const newCart = cart.filter(product => product.id !== id);
    cart = newCart;

    printTable(cart);
    printResumeCart(cart);
}

// Pinta la tabla en el html
const printTable = (cart) => {
    table.innerHTML = ''; //Reseteamos la tabla

    for (product of cart) {
        let totalPrice = getPriceProduct(product);
        let prime = (product.prime) ? 'Si' : 'No'

        table.innerHTML +=
            `<tr>
        <td><button onclick="deleteProduct(${product.id})">Eliminar</button></td>
        <td>${product.id}</td>
       <td>${product.name}</td>
       <td>${product.price}€</td>
       <td>${product.count}</td>
       <td>${prime}</td>
       <td>${totalPrice.toFixed(2)}€</td>
    </tr>`
    }
}

// Cacula el precio total del producto
const getPriceProduct = (product) => {
    return product.price * product.count;
}

// Calcula el total de la suma de todos los precios
const getSubtotalCart = (cart) => {
    let total = 0;
    for (product of cart) {
        total += getPriceProduct(product);
    }
    return total;
}

// Calcula los gatos de envío, si todos los productos son prime el envio es 0€ y sino es 30€
const getCostShipping = (cart) => {
    for (product of cart) {
        if (!product.prime) return false;
    }
    return true;
}

// Pinta resume carrito en el html
const printResumeCart = (cart) => {
    const sub = getSubtotalCart(cart); // subTotal
    const shipp = (getCostShipping(cart)) ? 0 : 30; // envío
    const dis = sub * 0.05; // descuento
    const tot = sub + shipp - dis; // total

    subTotal.innerHTML = sub.toFixed(2);
    shipping.innerHTML = shipp;
    discount.innerHTML = (sub > 50) ? dis.toFixed(2) : 0;
    total.innerHTML = tot.toFixed(2);
}

printTable(cart);
printResumeCart(cart);


