import { question } from "readline-sync";

function main() {
    const N = Number(question(`Digite um numero qualquer N: `));
    let prevNumber = Number(question(`Digite um novo N: `));
    let sum = prevNumber;
    let count = 1;

    while (sum !== N) {
        let newNumber = Number(question(`Digite um novo N: `));
        sum = prevNumber + newNumber;
        prevNumber = newNumber;
        count++
    }
    console.log(`Tiveram ${count} novos números até que a soma desse igual à ${N}`);
}

main();