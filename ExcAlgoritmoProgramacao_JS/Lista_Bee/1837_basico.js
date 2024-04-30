import { question } from "readline-sync";

function main() {
    let entrada = get_Text().split(` `);
    let denominador = Number(entrada[0]);
    let divisor = Number(entrada[1]);

    let quociente = 0;
    let resto = 0;
    if(divisor < 0) {
        divisor = divisor * (-1);
        quociente = Math.floor((denominador) / (divisor));
        quociente = quociente * (-1);
        divisor = divisor * (-1);
        resto = (denominador) - ((divisor) * quociente);

    }else {
        quociente = Math.floor((denominador) / (divisor));
        resto = (denominador) - ((divisor) * quociente);
    }

    print(`${quociente} ${resto}`);

}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();