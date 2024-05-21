import { question } from "readline-sync";

function main() {
    const N = get_Number();
    let count = 1, current = 1, successor = 1, sequence = [1, 1];

    if (N > 0 && N < 46) {
        if (N === 1) {
            print(sequence[0]);
        } else if (N === 2) {
            print(`${sequence[0]} ${sequence[1]}`);
        } else {
            while (count <= N - 2) {
                let sum = current + successor;
                sequence.unshift(sum);

                current = successor;
                successor = sum;
                count++;
            }
            print(sequence.join(' '));
        }
    }
}

function get_Number() {
    return Number(question());
}

function print(texto) {
    return console.log(texto);
}

main();