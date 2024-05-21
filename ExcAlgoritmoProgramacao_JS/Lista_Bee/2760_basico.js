import { question } from "readline-sync";

function main() {
    const FRASE_1 = get_Text();
    const FRASE_2 = get_Text();
    const FRASE_3 = get_Text();

    print(`${FRASE_1}` + `${FRASE_2}` + `${FRASE_3}`);
    print(`${FRASE_2}` + `${FRASE_3}` + `${FRASE_1}`);
    print(`${FRASE_3}` + `${FRASE_1}` + `${FRASE_2}`);
    print(`${FRASE_1.substring(0, 10)}` + `${FRASE_2.substring(0, 10)}` + `${FRASE_3.substring(0, 10)}`);

}

function get_Text() {
    return question();
}

function print(texto) {
    console.log(texto);
}

main();