import { question } from "readline-sync";

function main() {
    let n = getNumber();

    while (n != 0) {
        let resultado = encontrar_m(n);
        print(resultado);
        n = getNumber();
    }
}

function encontrar_m(valor_n) {
    let m = 1;
    let ultimaEstacaoRemovida = desligamento(valor_n, m);

    while (ultimaEstacaoRemovida != 13) {
        m++;
        ultimaEstacaoRemovida = desligamento(valor_n, m);
    }

    return m;
}

function desligamento(n, m) {
    let regioes = [];
    for (let i = 1; i <= n; i++) {
        regioes.push(i);
    }

    let regioesDesligadas = [];
    let posicaoParaRemover = 0;

    let regiaoDesligadaInicial = regioes.splice(posicaoParaRemover, 1)[0];
    regioesDesligadas.push(regiaoDesligadaInicial);

    let posicaoNoArry = posicaoParaRemover;

    while (regioes.length > 0) {
        let regioesRestantes = regioes.length;
        posicaoParaRemover = (posicaoNoArry + m - 1) % regioesRestantes;

        let regiaoDesligada = regioes.splice(posicaoParaRemover, 1)[0];
        regioesDesligadas.push(regiaoDesligada);

        posicaoNoArry = posicaoParaRemover;
    }

    return regioesDesligadas[regioesDesligadas.length - 1];
}

function getNumber() {
    return parseInt(question());
}

function print(texto) {
    return console.log(texto);
}

main();