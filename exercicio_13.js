class Jogador {
    constructor(nome, idade, posicao, pontuacao) {
        this.nome = nome,
        this.idade = idade,
        this.posicao = posicao,
        this.pontuacao = pontuacao;
    }
}

function adicionarJogador(time, nome, idade, posicao, pontuacao){
    const novoJogador = new Jogador(nome, idade, posicao, pontuacao);
    time.push(novoJogador);
    console.log("Novo jogador adicionado ao time");
}

function buscarPorPosicao(time, pos){
    if (time.length == 0){
        console.log("Não existem jogadores no time");
        return
    }

    let jogadores = [];

    for (i = 0; i < time.length; i++){
        if (time[i].posicao === pos)
            jogadores.push(time[i])
    }
    if (jogadores.length == 0)
        console.log("Não existem jogadores nessa posição");
    else {
        for (let jogador of jogadores){
            console.log(`Jogador: ${jogador.nome}, Idade: ${jogador.idade}, Pontuação: ${jogador.pontuacao}\n`);
        }
        return jogadores;
    }
}

function listarTime(time){
    console.log("----- Time Atual ----- ");
    if (time.length == 0)
        console.log("Não existem jogadores no time");
    else{
        for (let jogador of time){
            console.log(`Jogador: ${jogador.nome}, Idade: ${jogador.idade}, Posição: ${jogador.posicao}, Pontuação: ${jogador.pontuacao}\n`);
        } 
    }
}

function calcularPontuacaoMedia(time){
    if (time.length == 0)
        console.log("Não existem jogadores no time");
    else{
        let somaPontuacoes = 0;
        for (let jogador of time){
            somaPontuacoes += jogador.pontuacao;
        }
        let media = somaPontuacoes / time.length;
        console.log(`Pontuação média do time: ${media}`);
        return media;
    }
}

/* adicionarJogador(meuTime, "Thiago Almada", 23, "Meio-campo", 3);
adicionarJogador(meuTime, "Júnior Santos", 28, "Atacante", 10);
adicionarJogador(meuTime, "Marlon Freitas", 26, "Meio-campo", 2);

let zagueiros = buscarPorPosicao(meuTime, "Zagueiro");

adicionarJogador(meuTime, "John", 26, "Goleiro", 0);

listarTime(meuTime);

let pontuacaoMedia = calcularPontuacaoMedia(meuTime);
console.log(`Pontuação média do time: ${pontuacaoMedia}`); */

let meuTime = [];
let input, idadeJogador, pontuacaoJogador = 0;
let nomeJogador = '';
let posicaoJogador = '';

while (input != 5){
    console.log("Opções: \n1- Adicionar jogador\n2- Buscar por posição\n3- Listar time\n4- Calcular pontuação média\n5- Sair");
    input = parseInt(prompt("Escolha uma opção: "));
    switch (input) {
        case 1:
            console.log("Adicionando novo jogador...");
            nomeJogador = prompt("Digite o nome do novo jogador: ");
            idadeJogador = parseInt(prompt("Digite a idade do novo jogador: "));
            posicaoJogador = prompt("Digite a posição do jogador: ");
            pontuacaoJogador = parseInt(prompt("Digite a pontuação do jogador: "));
            adicionarJogador(meuTime, nomeJogador, idadeJogador, posicaoJogador, pontuacaoJogador);
            break;
        case 2:
            let posicaoEscolhida = prompt("Digite a posição a ser buscada");
            console.log("Buscando jogadores nessa posição...");
            buscarPorPosicao(meuTime, posicaoEscolhida);
            break;
        case 3:
            listarTime(meuTime);
            break;
        case 4:
            calcularPontuacaoMedia(meuTime);
            break;
        default:
            break;
    }
}
