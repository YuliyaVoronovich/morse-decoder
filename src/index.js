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

   let arrayTens = expr.match(/.{1,10}/g);
   let result = '';

   arrayTens.forEach(symbols => symbols === '**********'? result += ' ' : result += decoderSymbol(symbols));
      
   return result;   
}

function decoderSymbol (symbols) {

    let resString = '';
 
    for (let i=0; i<symbols.length; i+=2) {

         if (symbols.slice(i, i+2) === '00') continue;
         else if (symbols.slice(i, i+2) === '10') resString += '.';
         else if (symbols.slice(i, i+2) === '11') resString += '-';
    }
    return MORSE_TABLE[resString];
   }

module.exports = {
    decode
}