import { question } from "readline-sync";

function main() {
    const nota_1 = get_Number(), media = get_Number();
    const nota_2 = (media * 2) - nota_1;
    print(nota_2);

}

function get_Number() {
    return Number(question());
}

function print(texto) {
    return console.log(texto);
}

main();