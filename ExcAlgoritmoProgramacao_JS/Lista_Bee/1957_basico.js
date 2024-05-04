import { question } from "readline-sync";

function main() {
    let decimal = get_Number();
    let hexadecimal = ``;

    if (decimal === 0) {
        hexadecimal += `0`;
    } else {
        while (decimal > 0) {
            let quociente = Math.floor(decimal / 16);
            let resto = decimal % 16;

            if (resto >= 10) {
                resto = (resto === 10) ? `A` : (resto === 11) ? `B` : (resto === 12) ? `C` : (resto === 13) ? `D` : (resto === 14) ? `E` : `F`;
            }
            hexadecimal += `${resto}`;

            decimal = quociente;
        }
    }
    hexadecimal = hexadecimal.split(``);
    print(hexadecimal.reverse().join(``));
}

function get_Number() {
    return Number(question());
}

function print(texto) {
    return console.log(texto);
}

main();