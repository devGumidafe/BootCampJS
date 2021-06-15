const randomId = () => (
    Math.floor(Math.random() * (100 - 1)) + 1
)

const table = document.getElementById('myTable');
const totalCart = document.getElementById('totalCart');

const cart = [
    {
        id: randomId(),
        name: 'Tarjeta de sonido',
        price: 30.99,
        count: 5,
        premium: true
    },
    {
        id: randomId(),
        name: 'Placa base',
        price: 77.42,
        count: 4,
        premium: false
    },
    {
        id: randomId(),
        name: 'Procesador',
        price: 196.90,
        count: 2,
        premium: true
    },
    {
        id: randomId(),
        name: 'Disco duro',
        price: 499.00,
        count: 1,
        premium: false
    },
    {
        id: randomId(),
        name: 'Tarjeta Grafica',
        price: 51.30,
        count: 3,
        premium: true
    }
]

const printTable = (cart) => {
    for (product of cart) {
        let totalProduct = getTotalProduct(product);
        let premium = (product.premium) ? 'Si' : 'No'

        table.innerHTML +=
    `<tr>
        <td>X</td>
        <td>${product.id}</td>
       <td>${product.name}</td>
       <td>${product.price}</td>
       <td>${product.count}</td>
       <td>${premium}</td>
       <td>${totalProduct.toFixed(2)}€</td>
    </tr>`
    }
}

const getTotalProduct = (product) => {
    const totalProduct = product.price * product.count;
    return totalProduct;
}

const getTotalCart = () => {
    let totalCart = 0;
    for (product of cart) {
        totalCart += getTotalProduct(product);
    }
    return totalCart;
}

printTable(cart);
totalCart.innerHTML = getTotalCart() + ' €';