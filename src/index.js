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
    // write your solution here
    return myDecode(expr);
}

module.exports = {
    decode
}

const myDecode = (expr) => {
    const dicM = dic(MORSE_TABLE);

    space = '**********';

    ans = '';
    i = 10;
    while (i <= expr.length) {
        sub = expr.substring(i-10, i);
        i = i + 10;
        if (sub == space) {
            ans = ans + ' ';
        }
        else {
            ans = ans + dicM[sub];
        }
    }

    return ans;
}

const transformKey = (key) => {
    kk = '';
    for (i in key){
        if (key[i]=='-') {
            kk = kk + '11';
        }
        else {
            kk = kk + '10';
        }
    }
    kk = '0000000000'+kk;
    return kk.substring(kk.length-10, kk.length);
}

const dic = (MM) => {
    a = {};
    for (key in MM) {
        // console.log(key);
        // console.log(MM[key]);
        kk = transformKey(key);
        a[kk] = MM[key];
    }
    // console.log(a);
    return a;
}
console.log(myDecode("00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010"));//1