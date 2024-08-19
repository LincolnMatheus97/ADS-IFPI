import { question } from "readline-sync";

function main() {
    let [entrada1, entrada2] = get_Text().split(` `);

    while (entrada1 !== `0` && entrada2 !== `0`) {
        let numero = entrada2.split(``);
        numero = numero.filter(algarismo => algarismo !== entrada1);
        if (numero.length === 0) {
            numero.push(`0`);
        }

        let numeroReal = numero.join(``).replace(/^0+/, ``);
        if (numeroReal === ``) {
            numeroReal = `0`;
        }
        print(numeroReal);

        [entrada1, entrada2] = get_Text().split(` `);
    }
}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);

}

main();