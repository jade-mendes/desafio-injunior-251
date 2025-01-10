function divByThree(value){
    return (value % 3) == 0 ? true : false;
}

function divByFive(value){
    return (value % 5) == 0 ? true : false;
}

let number = parseInt(prompt("Digite um número inteiro: "));

if (divByThree(number) && divByFive(number)) console.log("fizzbuzz");
else if (divByThree(number)) console.log("fizz");
else if (divByFive(number)) console.log("buzz");
