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
const expr = "0000101110000011111100000010110000111010**********00000000110000111111**********00101111100000101110000011111100001111100000101110000000101100000011110000001111000000101000000011100000111110";
const result = "road to programming";

function decode(expr) {
    let i = 0;
    let res = '';
    for ( let i = 1; i <= expr.length/10; i ++ ) {
      let substring = expr.slice(i*10 - 10, i*10 );
      let stringMotse = '';
      if ( substring === '**********'){
        stringMotse = ' ';  
      }
      else {
        for ( let j = 10; j > 0; j = j - 2 ) {         
          let substringMorse = substring.slice( j - 2, j ); 
          switch (substringMorse) {
            case '11':
              stringMotse = '-' + stringMotse ;
              break
            case '10':
              stringMotse = '.' + stringMotse ;
              break
            default:
              break          
          }                      
        }        
      stringMotse = MORSE_TABLE[stringMotse];
      } 
      res = res + stringMotse;
    }
    return res;
}
decode(expr);

module.exports = {
    decode
}