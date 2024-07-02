import { question } from "readline-sync";

function main() {
    let quantidadeCasos = get_Number();
    let listaVotos = [];
    let mensagem = `S`;

    while (quantidadeCasos != 0) {
        let quantidadeVotos = get_Number();
        listaVotos.push(quantidadeVotos);
        quantidadeCasos--;

    }

    let votosJovemCarlos = listaVotos[0];

    for (let i = 1; i < listaVotos.length; i++) {
        if(votosJovemCarlos < listaVotos[i]) {
            mensagem = `N`;
            break;
        }
    }

    print(mensagem);
}

function get_Number() {
    return Number(question());
}

function print(texto) {
    return console.log(texto);
}

main();