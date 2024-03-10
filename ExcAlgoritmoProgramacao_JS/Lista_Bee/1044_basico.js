import { question } from "readline-sync";

function main() {
    const valores = get_number();

    let Nvalores = valores.split(` `);
    let A = parseInt(Nvalores[0]);
    let B = parseInt(Nvalores[1]);

    const resposta = Eh_Multiplo(A, B);

    print(`${resposta}`);
}

function get_number() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

function Eh_Multiplo(num1, num2) {
    let mensagem;
    
    if (num2 % num1 === 0 || num1 % num2 === 0) {
        mensagem = `Sao Multiplos`
    } else {
        mensagem = `Nao sao Multiplos`
    }
    return mensagem
}

main();