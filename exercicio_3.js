function verificarIdades(array){
    let result = []
    for (i = 0; i < array.length; i++){
        array[i] = currentYear - array[i];
        array[i] <= 18 ? result[i] = 'menor' : result[i] = 'maior'; 
        console.log(`Pessoa ${i+1}: ${result[i]} de idade`);
    }
    return result;
}


let years = [1998, 2005, 2012];
let currentYear = prompt("Digite o ano atual: ");
verificarIdades(years);