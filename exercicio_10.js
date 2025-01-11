function displayMenu(array){
    let input = 0;
    let newClient = '';
    while (input != 3){
        console.log("Clientes na fila:");
        for (i = 0; i < array.length; i++)
            console.log(`${i+1}. ${array[i]}\n`);

        console.log("\nOpções: \n1.Novo Cliente\n2.Atender cliente\n3.Sair");
        input = parseInt(prompt("Escolha uma opção:"));

        switch (input) {
            case 1:
                newClient = prompt("Digite o nome do novo cliente: ");
                array.push(newClient);
                break;
            case 2:
                console.log(`${array[0]} está sendo atendido(a)...`);
                array.shift();
                break;
            default:
                break;
            }
    } 
}

let queue = ["João", "Maria", "José"];

displayMenu(queue);