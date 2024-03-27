import { question } from "readline-sync";

function main() {
    let count = 1;
    let countPair = 0;

    while (count <= 5) {
        let number = get_number();
        if (number % 2 === 0) {
            countPair++;
        }else 
        count++;
    }
    print(`${countPair} valores pares`);
}

function get_number() {
    return parseInt(question());
}

function print(texto) {
    return console.log(texto);
}

main();