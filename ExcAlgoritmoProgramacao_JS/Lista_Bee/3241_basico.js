import { question } from "readline-sync";

function main() {
    let quantidade_Caso = get_Number();

    while (quantidade_Caso !== 0) {
        let caso = get_Text();
        let caso_Formatado = caso.split(/[+=]/);
        let operador = caso.match(/[+=]/)[0];
        
        if (operador === `+`) {
            let numero_1 = parseInt(caso_Formatado[0]);
            let numero_2 = parseInt(caso_Formatado[1]);
            let soma = numero_1 + numero_2;

            print(soma);

        } else {
            print(`skipped`);

        }

        quantidade_Caso--;

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