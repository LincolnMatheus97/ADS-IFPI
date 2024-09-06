import { get_text, print } from "../utils/io.js";

function main() {
    let string = get_text(`Digite uma palavra ou frase qualquer:`).split(` `).join(``).split(``);
    let vogais = [`a`, `e`, `i`, `o`, `u`];
    let count_Vogal = 0, count_Conso = 0; 

    for (let i = 0; i < string.length; i++) {
        if (vogais.includes(string[i])) {
            count_Vogal++;
        } else {
            count_Conso++;
        }
    }

    print(`Total Vogais: ${count_Vogais} e Total Consoantes: ${string.length - count_Vogais}`);
}

main();