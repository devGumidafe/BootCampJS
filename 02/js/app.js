
// Objecto Hotel
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


// Asignamos valores
nameHotel.innerHTML = 'Hotel ' + hotel.name;
locationHotel.innerHTML = 'Ubicado en ' + hotel.location;
description.innerHTML = hotel.description;
imgHotel.src = hotel.img;