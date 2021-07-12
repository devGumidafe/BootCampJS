// *** CASO 1 ***
const bookingsList = [
    {
        typeRoom: "standard",
        pax: 1,
        nights: 3
    }, ,
    {
        typeRoom: "standard",
        pax: 1,
        nights: 4
    },
    {
        typeRoom: "suite",
        pax: 4,
        nights: 1
    },
    {
        typeRoom: "suite",
        pax: 2,
        nights: 5
    }
];

class PrivateBooking {
    constructor() {
        this._bookings = [];
        this._subtotal = 0;
        this._total = 0;
    }

    calculateTypeRoom(type) {
        const typeRoom = {
            standard: 100,
            suite: 150
        }
        return typeRoom[type]
    }

    calculatePlus(pax, nights) {
        return (pax > 1) ? (pax * 40 * nights) : 0
    }

    calculateSubtotalBookings() {
        this._subtotal = this._bookings.reduce((subtotal, { typeRoom, pax, nights }) =>
            subtotal + (nights * this.calculateTypeRoom(typeRoom)) + this.calculatePlus(pax, nights), 0)
    }

    calculateTotalBookings() {
        this._total = this.subtotal * 1.21;
    }

    set bookings(bookingsList) {
        this._bookings = bookingsList;
        this.calculateSubtotalBookings();
        this.calculateTotalBookings();
    }

    get subtotal() {
        return this._subtotal;
    }

    get total() {
        return this._total;
    }
}

const privateBooking = new PrivateBooking();
privateBooking.bookings = bookingsList;

console.log(`*** CASO 1 ***`);
console.log(`Private Bookings`);
console.log(`Subtotal: ${privateBooking.subtotal}€`);
console.log(`Total: ${privateBooking.total}€`);
console.log('')


// *** CASO 2 ***
const tourBookingList = [
    {
        typeRoom: "standard",
        pax: 1,
        nights: 3,
        spa: true,
        wifi: true
    },
    {
        typeRoom: "standard",
        pax: 1,
        nights: 4,
        spa: false,
        wifi: false
    },
    {
        typeRoom: "suite",
        pax: 4,
        nights: 1,
        spa: false,
        wifi: true
    },
    {
        typeRoom: "suite",
        pax: 2,
        nights: 5,
        spa: true,
        wifi: false
    }
];

// Precio spa 50€ por persona, precio wifi 20€ 

class TourBooking extends PrivateBooking {
    calculateServices(spa, wifi, pax) {
        let total = 0;
        total += spa ? 50 * pax : 0;
        total += wifi ? total + 20 : 0;

        return total;
    }

    calculateSubtotalBookings() {
        this._subtotal = this._bookings.reduce((subtotal, { spa, wifi, pax, nights }) =>
            subtotal + (nights * 100) + (this.calculatePlus(pax, nights))
            + (this.calculateServices(spa, wifi, pax)), 0)
    }
}

const tourBooking = new TourBooking();
tourBooking.bookings = tourBookingList;

console.log(`*** CASO 2 ***`);
console.log(`Tour Bookings`);
console.log(`Subtotal: ${tourBooking.subtotal}€`);
console.log(`Total: ${tourBooking.total}€`);
console.log('')


// *** DESAFIO ***
class Booking {
    constructor(standard, suite) {
        this.standard = standard;
        this.suite = suite;

        this._bookings = []
        this._subtotal = 0;
        this._total = 0;
    }

    calculatePlus(pax, nights) {
        return (pax > 1) ? (pax * 40 * nights) : 0
    }

    calculateSubtotalBookings() {

    }

    calculateTotalBookings() {
        this._total = this.subtotal * 1.21;
    }

    set bookings(bookingsList) {
        this._bookings = bookingsList;
        this.calculateSubtotalBookings();
        this.calculateTotalBookings();
    }

    get subtotal() {
        return this._subtotal;
    }

    get total() {
        return this._total;
    }
}


class BookingPrivate extends Booking {
    constructor(standard, suite) {
        super(standard, suite);
    }

    calculateTypeRoom(type) {
        const typeRoom = {
            standard: this.standard,
            suite: this.suite
        }
        return typeRoom[type]
    }

    calculateSubtotalBookings() {
        this._subtotal = this._bookings.reduce((subtotal, { typeRoom, pax, nights }) =>
            subtotal + (nights * this.calculateTypeRoom(typeRoom)) + this.calculatePlus(pax, nights), 0)
    }
}

const bookingPrivate = new BookingPrivate(100, 150);
bookingPrivate.bookings = bookingsList;

console.log(`*** DESAFIO ***`);
console.log(` Private Bookings `);
console.log(`Subtotal: ${bookingPrivate.subtotal}€`);
console.log(`Total: ${bookingPrivate.total}€`);
console.log('');


class BookingTour extends Booking {
    constructor(standard, suite) {
        super(standard, suite);
    }

    calculateServices(spa, wifi, pax) {
        let total = 0;
        total += spa ? 50 * pax : 0;
        total += wifi ? total + 20 : 0;

        return total;
    }

    calculateSubtotalBookings() {
        this._subtotal = this._bookings.reduce((subtotal, { spa, wifi, pax, nights }) =>
            subtotal + (nights * 100) + (this.calculatePlus(pax, nights))
            + (this.calculateServices(spa, wifi, pax)), 0)
    }
}

const bookingTour = new BookingTour(100, 150);
bookingTour.bookings = tourBookingList;

console.log(`*** DESAFIO ***`);
console.log(`Tour Bookings`);
console.log(`Subtotal: ${bookingTour.subtotal}€`);
console.log(`Total: ${bookingTour.total}€`);
console.log('');


// *** EJERCICIO ADICIONAL ***
const bookingsList_2 = [
    {
        typeRoom: "standard",
        pax: 1,
        nights: 3,
        breakfast: false
    }, ,
    {
        typeRoom: "standard",
        pax: 1,
        nights: 4,
        breakfast: true
    },
    {
        typeRoom: "suite",
        pax: 4,
        nights: 1,
        breakfast: false
    },
    {
        typeRoom: "suite",
        pax: 2,
        nights: 5,
        breakfast: true
    }
];

class Booking_2 {
    constructor(standard, suite) {
        this.standard = standard;
        this.suite = suite;

        this._bookings = []
        this._subtotal = 0;
        this._total = 0;
    }

    calculatePlus(pax, nights, breakfast) {
        let total = 0;
        total += (pax > 1) ? (pax * 40 * nights) : 0;
        total += breakfast ? (pax * 15 * nights) : 0;

        return total
    }

    calculateSubtotalBookings() {

    }

    calculateTotalBookings() {
        this._total = this.subtotal * 1.21;
    }

    set bookings(bookingsList) {
        this._bookings = bookingsList;
        this.calculateSubtotalBookings();
        this.calculateTotalBookings();
    }

    get subtotal() {
        return this._subtotal;
    }

    get total() {
        return this._total;
    }
}

class BookingPrivate_2 extends Booking_2 {
    constructor(standard, suite) {
        super(standard, suite);
    }

    calculateTypeRoom(type) {
        const typeRoom = {
            standard: this.standard,
            suite: this.suite
        }
        return typeRoom[type]
    }

    calculateSubtotalBookings() {
        this._subtotal = this._bookings.reduce((subtotal, { typeRoom, pax, nights, breakfast }) =>
            subtotal + (nights * this.calculateTypeRoom(typeRoom)) + this.calculatePlus(pax, nights, breakfast), 0)
    }
}

const bookingPrivate_2 = new BookingPrivate_2(100, 150);
bookingPrivate_2.bookings = bookingsList_2;

console.log(`*** EJERCICIO ADICIONAL ***`);
console.log(`Private Booking`);
console.log(`Subtotal: ${bookingPrivate_2.subtotal}€`);
console.log(`Total: ${bookingPrivate_2.total}€`);
console.log('');


class BookingTour_2 extends Booking_2 {
    constructor(standard, suite) {
        super(standard, suite);
    }

    calculateServices(spa, wifi, pax) {
        let total = 0;
        total += spa ? 50 * pax : 0;
        total += wifi ? total + 20 : 0;

        return total;
    }

    calculateSubtotalBookings() {
        this._subtotal = this._bookings.reduce((subtotal, { spa, wifi, pax, nights, breakfast }) =>
            subtotal + (nights * 100) + (this.calculatePlus(pax, nights, breakfast))
            + (this.calculateServices(spa, wifi, pax)), 0)
    }
}

const bookingTour_2 = new BookingTour_2(100, 150);
bookingTour_2.bookings = bookingsList_2;

console.log(`*** EJERCICIO ADICIONAL ***`);
console.log(`Tour Booking`);
console.log(`Subtotal: ${bookingTour_2.subtotal}€`);
console.log(`Total: ${bookingTour_2.total}€`);
console.log('');