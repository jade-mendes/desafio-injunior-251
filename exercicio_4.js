function moneyExchange(value){
    let dollar = value * dollarToday;
    let euro = value * euroToday;
    console.log(`Valor inserido: R$ ${value} \nEm dólar: US$ ${dollar} \nEm euro: € ${euro}`);
}

let myMoney = parseFloat(prompt("Digite um valor em reais (R$): "));
let euroToday =  6.10;
let dollarToday = 5.70;

moneyExchange(myMoney);