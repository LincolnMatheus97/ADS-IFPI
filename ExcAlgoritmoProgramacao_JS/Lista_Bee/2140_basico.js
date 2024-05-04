import { question } from "readline-sync";

function main() {
    let entradas = get_Text();

    while (entradas !== `0 0`) {
        let [valorCompra, valorEntregue] = entradas.split(` `).map(Number);
        let troco = Math.abs(valorEntregue - valorCompra);
        let trocoPossivel = [4, 7, 12, 22, 52, 102, 15, 25, 55, 105, 30, 60, 110, 70, 120, 150, 200, 100];

        if (trocoPossivel.includes(troco)) {
            print(`possible`);
        } else {
            print(`impossible`);
        }

        entradas = get_Text();
    }
}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();