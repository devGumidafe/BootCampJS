// Constantes impuestos
const REGULAR_TYPE = 21;
const LOWER_TYPE = 4;
const EXEMPT_TYPE = 0;

// Objeto products
const products = [
    {
        description: "Goma de borrar",
        price: 0.25,
        tax: LOWER_TYPE,
        stock: 2,
        units: 0,
    },
    {
        description: "Lápiz H2",
        price: 0.4,
        tax: LOWER_TYPE,
        stock: 5,
        units: 0,
    },
    {
        description: "Cinta rotular",
        price: 9.3,
        tax: REGULAR_TYPE,
        stock: 2,
        units: 0,
    },
    {
        description: "Papelera plástico",
        price: 2.75,
        tax: REGULAR_TYPE,
        stock: 5,
        units: 0,
    },
    {
        description: "Escuadra",
        price: 8.4,
        tax: REGULAR_TYPE,
        stock: 3,
        units: 0,
    },
    {
        description: "Pizarra blanca",
        price: 5.95,
        tax: REGULAR_TYPE,
        stock: 2,
        units: 0,
    },
    {
        description: "Afilador",
        price: 1.2,
        tax: LOWER_TYPE,
        stock: 10,
        units: 0,
    },
    {
        description: "Libro ABC",
        price: 19,
        tax: EXEMPT_TYPE,
        stock: 2,
        units: 0,
    },
];

// Elementos del DOM
const productsContainer = document.getElementById('products-container');
const btnCalculate = document.getElementById('btnCalculate');
const spanSubtotal = document.getElementById('subtotal');
const spanIVA = document.getElementById('iva');
const spanTotal = document.getElementById('total');


// FUNCIONES PARA CREAR LOS ELEMENTOS HTML
const createINPUT = (product) => {
    let input = document.createElement("input");
    input.setAttribute("class", "product-unit");
    input.setAttribute("type", "number");
    input.setAttribute("value", product.units);
    input.setAttribute("min", 0);
    input.setAttribute("max", product.stock)

    input.addEventListener("change", (event) => {
        product.units = Number(event.target.value);
        activateButton(btnCalculate, products);
    });

    return input;
}

const createLI = (product) => {
    let input = createINPUT(product);

    let li = document.createElement("li");
    li.setAttribute("class", "product");
    li.textContent = `${product.description} - ${product.price}€/ud.`;
    li.appendChild(input);

    return li;
}

const createOL = (productList) => {
    const ol = document.createElement("ol");
    ol.setAttribute("class", "list-product");

    for (const product of productList) {
        ol.appendChild(createLI(product))
    }

    return ol;
}

const printProductList = (productList) => {
    productsContainer.appendChild(createOL(productList))
}



// FUNCIONES PARA CALCULAR EL PRECIO
const getIVA = (productList) => {
    let IVA = 0;
    for (const product of productList) {
        IVA += productCost(product) * (product.tax / 100);
    }
    return IVA;
}

const productCost = (product) => {
    let productCost = product.price * product.units;
    return productCost;
}

const subtotalCost = (productList) => {
    let subtotalCost = 0;

    for (const product of productList) {
        subtotalCost += productCost(product);
    }
    return subtotalCost;
}

const totalCost = (productList) => subtotalCost(productList) + getIVA(productList);

const printTotalCart = (productList) => {
    spanSubtotal.innerHTML = subtotalCost(productList).toFixed(2);
    spanIVA.innerHTML = getIVA(productList).toFixed(2);
    spanTotal.innerHTML = totalCost(productList).toFixed(2);
}

const activateButton = (button, productList) => {
    let units = 0;

    for (const product of productList) {
        units += product.units;
    }

    button.disabled = units <= 0;
}


// USAMOS LAS FUNCIONES
printProductList(products);
activateButton(btnCalculate, products);

btnCalculate.addEventListener("click", () => {
    printTotalCart(products);
})
