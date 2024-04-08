import { question } from "readline-sync";

function main() {
    let number = Number(question(`Digite um numero qualquer, que voce desejar seus divisores: `));
    let flag = 0;

    while (number !== flag) {
        let dividers = numberDividers(number);
        console.log(dividers);
        number = Number(question(`Digite um novo, numero ou "0" para encerrar o programa: `));
    }
}

function numberDividers(num) {
    let count = 0;
    let flag = num;
    let mensagem = ``;

    while (count <= flag) {
        if (num % count === 0) {
            mensagem += `${count}`
            if (count < flag) {
                mensagem += ` `;
            }
        }
        count++;
    }
    return mensagem;
}

main();