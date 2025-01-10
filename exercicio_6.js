function fibonacci(n){
    if (n == 0){
        return 0;
    } else if (n == 1){
        return 1;
    } else {
        return fibonacci(n-1) + fibonacci(n-2);
    }
}

let number = parseInt(prompt("Digite quantos termos da sequência de Fibonacci devem ser exibidos: "));
if (number >= 0){
    for (let i = 0; i <= number; i++) {
        console.log(fibonacci(i));
    }
}