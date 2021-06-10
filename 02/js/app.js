
// Objeto Hoteles
const hotels =
{
    Baobab: {
        name: 'Baobab',
        location: 'Gran Canaria',
        description: 'Vivir unas vacaciones de lujo y diversión con un toque exótico',
        img: '../img/baobab.png'
    },
    Costa: {
        name: 'Costa Meloneras',
        location: 'Gran Canaria',
        description: 'Lugar mágico situado en Meloneras, la zona turística más exclusiva de Gran Canaria.',
        img: '../img/costa.png'
    },
    Villa: {
        name: 'Villa del Conde',
        location: 'Gran Canaria',
        description: ' Hotel único en toda Gran Canaria, no solo por los servicios que ofrece sino también por su singular diseño.',
        img: '../img/villa.png'
    }
}

// Creamos variables
let selectedHotel = prompt('Elige el hotel al que quiere realizar la reseña: Baobab, Costa y Villa');

let nameHotel = document.getElementById('nameHotel');
let locationHotel = document.getElementById('locationHotel');
let description = document.getElementById('description');
let imgHotel = document.getElementById('imgHotel');
let rating = document.getElementById('rating');
let isAnonymous = document.getElementById('anonymous');

// Asignamos valores
nameHotel.innerHTML = 'Hotel ' + hotels[selectedHotel].name;
locationHotel.innerHTML = 'Ubicado en ' + hotels[selectedHotel].location;
description.innerHTML = hotels[selectedHotel].description;
imgHotel.src = hotels[selectedHotel].img;

let respRating = prompt('Elige una puntuacion del 1 al 5');
rating.innerHTML = respRating + ' estrellas';

let respAnonymous = confirm('¿Quiere que la reseña sea anónima?');
isAnonymous.checked = respAnonymous;
