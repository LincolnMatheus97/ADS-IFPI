import { question } from "readline-sync";

function main() {
    const SALARIO = get_number();
    let impostoRenda = 0;
    let mensagem;

    if (SALARIO <= 2000) {
        mensagem = `Isento`;
    } else if (SALARIO <= 3000) {
        impostoRenda = (SALARIO - 2000) * 0.08;
        mensagem = `R$ ${impostoRenda.toFixed(2)}`;
    } else if (SALARIO <= 4500) {
        impostoRenda = (1000 * 0.08) + ((SALARIO - 3000) * 0.18);
        mensagem = `R$ ${impostoRenda.toFixed(2)}`;
    } else {
        impostoRenda = (1000 * 0.08) + (1500 * 0.18) + ((SALARIO - 4500) * 0.28);
        mensagem = `R$ ${impostoRenda.toFixed(2)}`;
    }

        print(mensagem);
    }

    function get_number() {
        return parseFloat(question());
    }

    function print(texto) {
        return console.log(texto);
    }

    main();