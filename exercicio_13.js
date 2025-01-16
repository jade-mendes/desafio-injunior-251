class Player {
    constructor(name, age, position, score) {
        this.name = name,
        this.age = age,
        this.position = position,
        this.score = score;
    }
}

function adicionarJogador(team, name, age, position, score){
    const newPlayer = new Player(name, age, position, score);
    time.push(newPlayer);
    console.log("Novo jogador adicionado ao time");
}

function buscarPorPosicao(team, position){
    if (team.length == 0){
        console.log("Não existem jogadores no time");
        return
    }

    let players = [];

    for (i = 0; i < team.length; i++){
        if (team[i].position === position)
            players.push(team[i])
    }
    if (players.length == 0)
        console.log("Não existem jogadores nessa posição");
    else {
        for (let player of players){
            console.log(`Jogador: ${player.name}, Idade: ${player.age}, Pontuação: ${player.score}\n`);
        }
        return players;
    }
}

function listarTime(team){
    console.log("----- Time Atual ----- ");
    if (team.length == 0)
        console.log("Não existem jogadores no time");
    else{
        for (let player of team){
            console.log(`Jogador: ${player.name}, Idade: ${player.age}, Posição: ${player.position}, Pontuação: ${player.score}\n`);
        } 
    }
}

function calcularPontuacaoMedia(team){
    if (team.length == 0)
        console.log("Não existem jogadores no time");
    else{
        let totalScore = 0;
        for (let player of team){
            totalScore += player.score;
        }
        let average = totalScore / team.length;
        console.log(`Pontuação média do time: ${average}`);
        return average;
    }
}

let myTeam = [];
let input, newPlayerAge, newPlayerScore = 0;
let newPlayerName = '';
let newPlayerPosition = '';

while (input != 5){
    console.log("Opções: \n1- Adicionar jogador\n2- Buscar por posição\n3- Listar time\n4- Calcular pontuação média\n5- Sair");
    input = parseInt(prompt("Escolha uma opção: "));
    switch (input) {
        case 1:
            console.log("Adicionando novo jogador...");
            newPlayerName = prompt("Digite o nome do novo jogador: ");
            newPlayerAge = parseInt(prompt("Digite a idade do novo jogador: "));
            newPlayerPosition = prompt("Digite a posição do jogador: ");
            newPlayerScore = parseInt(prompt("Digite a pontuação do jogador: "));
            adicionarJogador(myTeam, newPlayerName, newPlayerAge, newPlayerPosition, newPlayerScore);
            break;
        case 2:
            let position = prompt("Digite a posição a ser buscada");
            console.log("Buscando jogadores nessa posição...");
            buscarPorPosicao(myTeam, position);
            break;
        case 3:
            listarTime(myTeam);
            break;
        case 4:
            calcularPontuacaoMedia(myTeam);
            break;
        default:
            break;
    }
}
