import { question } from "readline-sync";

function main() {
    let quantidadeCasos = get_Number();
    for (let i = 0; i < quantidadeCasos; i++) {
        let [alg1, letra, alg2] = get_Text().split(``);
        let num1 = parseInt(alg1), num2 = parseInt(alg2);
        let valor;

        if (num1 === num2) {
            valor = num2 * num1;
        } else if (letra === letra.toLowerCase()) {
            valor = num1 + num2;
        } else if (letra === letra.toUpperCase()) {
            valor = num2 - num1;
        }
        
        print(valor);
    }
}

function get_Number() {
    return parseInt(question());
}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();