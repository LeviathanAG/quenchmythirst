const fs = require('fs');

var text, decrypted;

try {
    text= fs.readFileSync('ciphertext.txt', 'utf8');
} catch (err) {
    console.error('Error reading the file:', err);
}

const letterMap = {
    'a': 'c',
    'b': 's',
    'c': 'u',
    'd': 'h',
    'e': 'g',
    'f': 'l',
    'g': 'a',
    'h': 'w',
    'i': 'q',
    'k': 'd',
    'l': 't',
    'm': 'b',
    'n': 'm',
    'o': 'o',
    'r': 'k',
    'q': 'i',
    's': 'e',
    't': 'y',
    'w': 'p',
    'x': 'f',
    'y': 'r',
    'z': 'n'
}

function decryptString(input) {
    return input.split('').map(char => {
        return letterMap[char.toLowerCase()] || char.toLowerCase(); 
    }).join('');
}

decrypted = decryptString(text)

try {
    fs.writeFileSync('decrypted.txt', decrypted, 'utf8');
    console.log('File has been written successfully.');
} catch (err) {
    console.error('Error writing to file:', err);
}
