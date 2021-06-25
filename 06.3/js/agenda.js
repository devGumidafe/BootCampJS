// Constantes
const WORK_HOURS = [
    "08:00 - 09:00",
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",
    "13:00 - 14:00",
    "15:00 - 16:00",
    "16:00 - 17:00"
];

// Datos
const myTeam = [
    {
        name: "María",
        availability: new Array(8).fill(true)
    },
    {
        name: "Pedro",
        availability: new Array(8).fill(true)
    },
    {
        name: "Esther",
        availability: new Array(8).fill(true)
    },
    {
        name: "Marcos",
        availability: new Array(8).fill(true)
    },
];

// Generamos de manera aleatoria las horas disponibles
const randomAvailability = (team) => {
    for (const member of team) {
        for (const index in member.availability) {
            member.availability[index] = Math.random() < 0.5;
        }
    }
}

// Pintamos en consola las horas de cada miembro del equipo
const printTeamHours = (team) => {
    for (const member of team) {
        console.log(`Disponibilidad ${member.name}`);
        for (const index in member.availability) {
            member.availability[index] ? console.log(`${WORK_HOURS[index]}: Si`) : console.log(`${WORK_HOURS[index]}: No`);
        }
    }
}

// Obtenemos las horas disponibles de cada miembro del equipo
const memberAvailabilityHours = (hours) => {
    let result = [];
    for (const index in hours) {
        if (hours[index]) result.push(index);
    }
    return result;
}

// Obtenemos las horas disponibles de todo el equipo
const teamAvailabilityHours = (team) => {
    let result = [];
    for (const member of team) {
        result = result.concat(memberAvailabilityHours(member.availability));
    }
    return result;
}

// Comprobamos los huecos disponibles
const getHoursAvailability = (hours) => {
    let result = [];
    let count = 0

    for (let i = 0; i < hours.length; i++) {
        count = 0

        for (let j = 0; j < hours.length; j++) {
            if (hours[i] === hours[j]) count++;
        }
        if (count === 4 && result.indexOf(hours[i]) === -1) result.push(hours[i])
    }
    return result;
}

// Pintamos los huecos diponibles
const printHoursAvailability = (hours) => {
    if (!hours.length) return console.log('Lo siento. No hay hueco disponible en el equipo');

    for (const hour of hours) {
        console.log(`Hueco encontrado en el horario ${WORK_HOURS[hour]}`)
    }
}


randomAvailability(myTeam);
printTeamHours(myTeam);

const teamHours = teamAvailabilityHours(myTeam);
const hoursAvailability = getHoursAvailability(teamHours);

printHoursAvailability(hoursAvailability);
