import { question } from "readline-sync";

function main() {
    let quantidadeCaso = get_Text();
    let quantidadeCarrinho = 0, quantidadeBoneca = 0;

    while (quantidadeCaso !== 0) {
        let [nome, sexo] = get_Text().split(` `);
        if (sexo === `F`) {
            quantidadeBoneca++;

        } else {
            quantidadeCarrinho++;

        }

        quantidadeCaso--;

    }

    print(`${quantidadeCarrinho} carrinhos`);
    print(`${quantidadeBoneca} bonecas`);

}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();