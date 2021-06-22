const getRandom = (min, max) => Math.round(Math.random() * (max - min) + min);

// Devuelve una lista de número aleatorios
const randomPick = (n, min, max) => {
    if (n > (max - min + 1)) return null;

    const randomList = [];

    while (randomList.length < n) {
        let newRamdon = getRandom(min, max);

        if (randomList.indexOf(newRamdon) === -1) randomList.push(newRamdon);
    }

    return randomList;
}

console.log(randomPick(6, 1, 49));
console.log(randomPick(15, 1, 15));
console.log(randomPick(1, 1, 6));
console.log(randomPick(200, 1, 200));