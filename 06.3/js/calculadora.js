const billsAndCoins = [200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01]
let change = new Array(billsAndCoins.length).fill(0);

// DOM elements
const inputTotal = document.getElementById('total');
const inputMoney = document.getElementById('money');
const spanRefund = document.getElementById('refund');
const btnCalculate = document.getElementById('btnCalculate');
const divChange = document.getElementById('divChange');


const getRefund = (total, money) => money >= total ? money - total : -1;

const giveChange = (amount) => {
    for (const index in billsAndCoins) {
        if (amount >= billsAndCoins[index]) {
            change[index] = Math.trunc(amount / billsAndCoins[index]); // Truncamos el resultado, para obtener solo la parte entera.
            amount = amount % billsAndCoins[index]; // Actualizamos el importe a devolver
        }
    }
}

const createP = (cash) => {
    let p = document.createElement("p");
    p.textContent = cash;
    return p;
}

const printChange = () => {
    for (const index in change) {
        if (change[index] > 0) {
            if (index <= 5) {
                divChange.appendChild(createP(`${change[index]} billete de ${billsAndCoins[index]} euro`))
            } else if (index > 5 && index <= 7) {
                divChange.appendChild(createP(`${change[index]} moneda de ${billsAndCoins[index]} euro`))
            } else {
                divChange.appendChild(createP(`${change[index]} moneda de ${billsAndCoins[index] * 100} céntimo`))
            }
        }
    }
}


btnCalculate.addEventListener('click', () => {
    const refund = getRefund(Number(inputTotal.value), Number(inputMoney.value));
    spanRefund.innerHTML = (refund !== -1) ? refund + ' €' : 'Importe entregado insuficiente';

    if (refund > 0) {
        giveChange(refund); // Calculamos el cambio

        divChange.innerHTML = ''; // Borramos el contenido del div si lo hubiera

        printChange(); // Pintamos en el html los billetes y monedas a devolver

        change = new Array(billsAndCoins.length).fill(0); //  Reseteamos el cambio
    }
})
