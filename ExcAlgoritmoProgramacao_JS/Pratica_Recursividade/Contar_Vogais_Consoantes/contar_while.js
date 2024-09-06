import { get_text, print } from "../utils/io.js";

function main() {
    let string = get_text(`Digite uma palavra ou frase qualquer:`).split(` `).join(``).split(``);
    let vogais = [`a`, `e`, `i`, `o`, `u`];
    let indice = 0, count_Vogal = 0, count_Conso = 0; 

    while (indice < string.length) {
        if (vogais.includes(string[indice])) {
            count_Vogal++;
        } else {
            count_Conso++;
        }
        indice++
    }
    print(`Total Vogais: ${count_Vogais} e Total Consoantes: ${string.length - count_Vogais}`);
}

main();