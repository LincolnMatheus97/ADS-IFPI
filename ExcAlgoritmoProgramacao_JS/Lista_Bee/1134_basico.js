import { question } from "readline-sync";

function main() {
    let total_gasolina = 0;
    let total_alcool = 0;
    let total_diesel = 0;

    while (true) {
        let voto = get_number();
        if (voto === 1 || voto === 2 || voto === 3) {
            voto = (voto === 1) ? total_alcool += 1 : (voto === 2) ? total_gasolina += 1 : total_diesel += 1;
        } else if (voto === 4) {
            break;
        }
    }
    print(`MUITO OBRIGADO`);
    print(`Alcool: ${total_alcool}`);
    print(`Gasolina: ${total_gasolina}`);
    print(`Diesel: ${total_diesel}`);
}

function get_number() {
    return parseInt(question());
}

function print(texto) {
    return console.log(texto);
}

main();