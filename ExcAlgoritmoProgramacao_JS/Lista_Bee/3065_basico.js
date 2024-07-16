import { question } from "readline-sync";

function main() {
    let quantidade_Caso = get_Number();
    let quantidade_Teste = 1;

    while (quantidade_Caso !== 0) {
        let caso = get_Text();
        let valores = caso.split(/[+-]/).map(Number);
        let operadores = caso.match(/[+-]/g) || [];

        let resultado_Operacao = valores[0];
        for (let i = 0; i < operadores.length; i++) {
            if (operadores[i] === `+`) {
                resultado_Operacao += valores[i + 1];

            } else {
                resultado_Operacao -= valores[i + 1];

            }

        }

        print(`Teste ${quantidade_Teste}`);
        print(resultado_Operacao);
        print(``);

        quantidade_Teste++;
        quantidade_Caso = get_Number();

    }

}

function get_Number() {
    return Number(question());

}

function get_Text() {
    return question();

}

function print(texto) {
    return console.log(texto);

}
main();