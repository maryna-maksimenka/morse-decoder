const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let decoded = '';
    let start = 0;

    for (let i = 0; i < expr.length / 10; i++) {
        let symbol = expr.slice(start, start + 10);
        start += 10;
        if (symbol == '**********') {
            decoded += ' ';
            continue;
        }

        let encoded = '';
        for (let j = 10; j > 0; j -= 2) {
            switch (symbol.slice(j - 2, j)) {
                case '10':
                    encoded += '.';
                    break;
                case '11':
                    encoded += '-';
                    break;
            }
        }

        decoded += MORSE_TABLE[encoded.split('').reverse().join('')];    
    }

    return decoded;
}

module.exports = {
    decode
}