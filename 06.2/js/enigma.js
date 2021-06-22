
// Variables
const plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
const encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

const message = document.getElementById('message');
const enigma = document.getElementById('enigma');

const encryptedMessage = (message) => {
    const arrayMessage = [...message];
    let encryptedText = '';

    for (let i = 0; i < arrayMessage.length; i++) {
        encryptedText += encryptedAlphabet[plainAlphabet.indexOf(arrayMessage[i])];
    }

    return encryptedText;
}

const decryptedMessage = (message) => {
    const arrayMessage = [...message];
    let decryptedText = '';

    for (let i = 0; i < arrayMessage.length; i++) {
        decryptedText += plainAlphabet[encryptedAlphabet.indexOf(arrayMessage[i])]
    }

    return decryptedText;
}


document
    .getElementById('btnEncrypt')
    .addEventListener('click', () => {
        enigma.innerHTML = encryptedMessage(message.value);
    });

document
    .getElementById('btnDecrypt')
    .addEventListener('click', () => {
        message.innerHTML = decryptedMessage(enigma.value);
    });
