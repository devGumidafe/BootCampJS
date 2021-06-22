
// Variables
const plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
const encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";
const textAreaDecrypt = document.getElementById('textAreaDecrypt');
const textAreaEncrypt = document.getElementById('textAreaEncrypt');

textAreaDecrypt.value = '';

// Funciones
const cleanText = (text) => text.trim().toLowerCase();

const encryptedText = () => {
    const text = cleanText(textAreaDecrypt.value);
    let encryptedText = '';

    for (let i = 0; i < text.length; i++) {
        encryptedText += (plainAlphabet.indexOf(text[i]) !== -1)
            ? encryptedAlphabet[plainAlphabet.indexOf(text[i])]
            : '';
    }

    textAreaEncrypt.value = encryptedText;
}

const decryptedText = () => {
    const text = cleanText(textAreaEncrypt.value);
    let decryptedText = '';

    for (let i = 0; i < text.length; i++) {
        decryptedText += (encryptedAlphabet.indexOf(text[i]) !== -1)
            ? plainAlphabet[encryptedAlphabet.indexOf(text[i])]
            : '';
    }

    textAreaDecrypt.value = decryptedText;
}
