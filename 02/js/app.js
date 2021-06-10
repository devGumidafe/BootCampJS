
// Objeto hotels
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

//Objeto stars
const stars = {
    1:
        "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    2:
        "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    3:
        "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
    4:
        "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
    5:
        "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
};

// Selección hotel a evaluar
let selectedHotel = prompt('Elige el hotel al que quiere realizar la reseña: Baobab, Costa y Villa');

// Creamos variables
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

// Interactuamos con el usuario
let respRating = prompt('Elige una puntuacion del 1 al 5');
rating.innerHTML = stars[respRating];

let respAnonymous = confirm('¿Quiere que la reseña sea anónima?');
isAnonymous.checked = respAnonymous;
