
// Objeto Hotel
const hotel = {
    name: 'Baobab',
    location: 'Gran Canaria',
    description: 'Vivir unas vacaciones de lujo y diversión con un toque exótico',
    img: '../img/baobab.png'
}

// Creamos variables
let nameHotel = document.getElementById('nameHotel');
let locationHotel = document.getElementById('locationHotel');
let description = document.getElementById('description');
let imgHotel = document.getElementById('imgHotel');
let rating = document.getElementById('rating');

// Asignamos valores
nameHotel.innerHTML = 'Hotel ' + hotel.name;
locationHotel.innerHTML = 'Ubicado en ' + hotel.location;
description.innerHTML = hotel.description;
imgHotel.src = hotel.img;

let respRating = prompt ('Elige una puntuacion del 1 al 5');
rating.innerHTML = respRating + ' estrellas';


