import { question } from "readline-sync";

function main() {
    const N = get_number();

    let contador = 1;
    let total = 0;
    let total_coelhos = 0;
    let total_ratos = 0;
    let total_sapos = 0;

    while (contador <= N) {
        let quantia_tipo = get_text().toUpperCase();

        let dados = quantia_tipo.split(` `);
        let quantia = parseInt(dados[0]);
        let tipo = dados[1];

        if (Quantia_Valida(quantia)) {
            tipo = (tipo === `C`) ? total_coelhos += quantia : (tipo === `R`) ? total_ratos += quantia : total_sapos += quantia;
            total += quantia;
        }
        contador++;
    }
    let porcentagem_coelhos = porcentagem(total_coelhos, total);
    let porcentagem_ratos = porcentagem(total_ratos, total);
    let porcentagem_sapos = porcentagem(total_sapos, total);

    print(`Total: ${total} cobaias`);
    print(`Total de coelhos: ${total_coelhos}`);
    print(`Total de ratos: ${total_ratos}`);
    print(`Total de sapos: ${total_sapos}`);
    print(`Percentual de coelhos: ${porcentagem_coelhos.toFixed(2)} %`);
    print(`Percentual de ratos: ${porcentagem_ratos.toFixed(2)} %`);
    print(`Percentual de sapos: ${porcentagem_sapos.toFixed(2)} %`);

}

function get_number() {
    return parseInt(question());
}

function print(texto) {
    return console.log(texto);
}

function get_text() {
    return question();
}

function Quantia_Valida(numero) {
    return (numero >= 1 && numero <= 15);
}

function porcentagem(valor, total) {
    return (valor * 100) / total;
}


main();