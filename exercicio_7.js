function splitLetters(str){
    let words = str.split(' ');
    let bigWord = '';
    for (let word of words){
        bigWord += word;
    }
    return bigWord.split('');
}

function arraysEqual(a, b){
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;
    return a.every((value, index) => value === b[index]);
}

let sentence = prompt("Digite uma frase: ").toLowerCase();
let letters = splitLetters(sentence);
let reversedLetters = letters.slice().reverse();

if (arraysEqual(letters, reversedLetters)) console.log("É um palíndromo");
else console.log("Não é um palíndromo");
