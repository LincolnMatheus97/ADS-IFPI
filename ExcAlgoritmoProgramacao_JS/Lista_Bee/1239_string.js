import { question } from "readline-sync";

function main() {
    let caso = get_Text();

    while (caso !== ``) {
        let string_Comprimida = caso.split(``);
        let italico = 0, negrito = 0;
        
        for (let i = 0; i < string_Comprimida.length; i++) {
            if (string_Comprimida[i] === `_` && italico === 0) {
                string_Comprimida[i] = `<i>`;
                italico++;
            } else if (string_Comprimida[i] === `_` && italico === 1) {
                string_Comprimida[i] = `</i>`;
                italico = 0;
            } else if (string_Comprimida[i] === `*` && negrito === 0) {
                string_Comprimida[i] = `<b>`;
                negrito++;
            } else if (string_Comprimida[i] === `*` && negrito === 1) {
                string_Comprimida[i] = `</b>`;
                negrito = 0;
            }

        }

        let texto = string_Comprimida.join(``);
        print(texto);

        caso = get_Text();
    }
}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();