function factorial(n){
    if (n == 0){
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

function isWholeNumber(str){
    const num = Number(str);
    return Number.isInteger(num) && num >= 0;
}

let input = "";

while (input !== 'n'){
    let number = prompt("Digite um número inteiro positivo: ");
    if (isWholeNumber(number)){
        console.log(`${number}! = ${factorial(number)}`);
        input = prompt("Deseja calcular outro fatorial? [S/N]").toLowerCase();
    } else {
        console.log("Número inválido. Tente novamente");
    }
}
