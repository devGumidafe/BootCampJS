const roomType = document.getElementById('roomType');
const occupation = document.getElementById('occupation');
const nights = document.getElementById('nights');
const parking = document.getElementById('parking');
const spa = document.getElementById('spa');
const btn = document.getElementById('btn');
const total = document.getElementById('total');


// Calcula la tarifa de la habitación con spa incluido
function priceTypeRoom() {
    price = 0

    if (roomType.value === 'suit') {
        price = 150;
    } else if (roomType.value === 'junior') {
        price = 120;
    } else {
        price = 100;
    }

    price = (spa.checked) ? price + 20 : price;

    return price * nights.value;
}

// Depende del tipo de habitación incrementa o decrementa el precio de la reserva
function priceOccupationRoom(price) {
    if (occupation.value === 'single') {
        return price - (price * 0.25);
    } else if (occupation.value === 'triple') {
        return price + (price * 0.25);
    } else {
        return price;
    }
}

// Cada node de parking suma 10€ al precio de la reserva
function priceParking() {
    return 10 * parking.value;
}

// Precio total de la reserva
function totalBooking() {
    let priceRoom = priceTypeRoom();
    let price = priceOccupationRoom(priceRoom);
    const totalPrice = price + priceParking();
    return totalPrice;
}

// Valida los inputs de número de noches y noches de parking
function validation() {
    if (nights.value === '') {
        alert('Error debe incluir el número de noches');
        return false;
    }

    if (nights.value <= 0) {
        alert('Error el número de noches debe ser mayor que 0');
        return false;
    }

    if (parking.value === '') {
        alert('Error debe incluir las noches de parking')
        return false;
    }

    if (parking.value < 0) {
        alert('Error las noches de parking no pueden ser menor que 0')
        return false;
    }

    return true;
}

btn.addEventListener('click', () => {
    if (validation()) {
        total.innerHTML = totalBooking()
    }
})