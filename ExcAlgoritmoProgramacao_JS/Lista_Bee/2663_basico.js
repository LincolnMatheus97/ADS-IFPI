import { question } from "readline-sync";

function main() {
    let pontuacoes = [];
    const N = get_Number(); 
    const K = get_Number(); 


    for (let i = 0; i < N; i++) {
        pontuacoes.push(get_Number());
    }

    pontuacoes.sort((a, b) => b - a);
    let menorPontuacaoClassificatoria = pontuacoes[K - 1];

    let classificados = 0;
    for (let i = 0; i < N; i++) {
        if (pontuacoes[i] >= menorPontuacaoClassificatoria) {
            classificados++;
        } else {
            break;
        }
    }

    print(classificados);
}

function get_Number() {
    return Number(question());
}

function print(texto) {
    return console.log(texto);
}

main();