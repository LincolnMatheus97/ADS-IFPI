import { question } from "readline-sync";

function main() {
    let quantidade_Casos = get_Number();

    for (let i = 0; i < quantidade_Casos; i++) {
        let lista_String = [];
        let quantidade_Strings = get_Number();
        let valor = 0;

        for (let m = 0; m < quantidade_Strings; m++) {
            let string = get_Text().toUpperCase();
            lista_String.push(string);
        }

        for (let k = 0; k < lista_String.length; k++) {
            for (let j = 0; j < lista_String[k].length; j++) {
                valor += (lista_String[k][j].charCodeAt(0) - 65) + k + j;
            }
        }

        print(valor);
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