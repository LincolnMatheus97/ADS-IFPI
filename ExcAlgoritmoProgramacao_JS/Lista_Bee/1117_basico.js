import { question } from "readline-sync";

function main() {
    let nota_1 = 0;
    let nota_2 = 0;

    while (true) {
        nota_1 = get_number();
        if(nota_1 < 0 || nota_1 > 10) {
            print(`nota invalida`);
        }else {
            break;
        }
    }

    while (true) {
        nota_2 = get_number();
        if(nota_2 < 0 || nota_2 > 10) {
            print(`nota invalida`);
        }else {
            break;
        }
    }

    let media = (nota_1 + nota_2) / 2;
    print(`media = ${media.toFixed(2)}`)
}

function get_number() {
    return parseFloat(question());
}

function print(texto) {
    return console.log(texto);
}

main();