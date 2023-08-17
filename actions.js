const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

document.getElementById('cipherButton').addEventListener('click', cipherText);
document.getElementById('decipherButton').addEventListener('click', decipherText);

function cipherText() {
    const inputOriginal = document.getElementById('inputOriginalText');
    const result = document.getElementById('result');
    let originalMessage = inputOriginal.value.toLowerCase();
    let encryptedMessage = '';

    for (let i = 0; i < originalMessage.length; i++) {
        let letra = originalMessage[i];
        let index = alphabet.indexOf(letra);

        if (index !== -1) {
            let newLetterIndex = (index + 5) % alphabet.length;
            encryptedMessage += alphabet[newLetterIndex];
        } else {
            encryptedMessage += letra;
        }
    }

    result.value = encryptedMessage;
}

function decipherText() {
    const inputEncrypted = document.getElementById('inputEncryptedText');
    const result = document.getElementById('result');
    let encryptedMessage = inputEncrypted.value.toLowerCase();
    let decryptedMessage = '';

    for (let i = 0; i < encryptedMessage.length; i++) {
        let letra = encryptedMessage[i];
        let index = alphabet.indexOf(letra);

        if (index !== -1) {
            let newLetterIndex = (index - 5 + alphabet.length) % alphabet.length;
            decryptedMessage += alphabet[newLetterIndex];
        } else {
            decryptedMessage += letra;
        }
    }

    result.value = decryptedMessage;
}

