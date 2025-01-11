function countAscending(array){
    let count = 0;
    for (i = 1; i < array.length; i++){
        if (array[i] > array[i-1])
            count += 1;
    }
    return count;
}

let length = parseInt(prompt("Digite quantos números deseja inserir: "));
let numbers = [];

for (i = 0; i < length; i++){
    numbers[i] = parseInt(prompt("Digite um número inteiro: "));
}

console.log(countAscending(numbers));