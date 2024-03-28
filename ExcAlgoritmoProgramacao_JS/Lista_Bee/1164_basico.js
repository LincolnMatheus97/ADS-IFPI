import { question } from "readline-sync";

function main() {
    const N = get_Number();
    let count = 1;
    if (N >= 1 && N <= 20) {
        while (count <= N) {
            let x = get_Number();

            if (x >= 1 && x <= 10 ** (8)) {
                let bool = perfectNumber(x);
                if (bool === true) {
                    print(`${x} eh perfeito`);
                } else {
                    print(`${x} nao eh perfeito`);
                }
                count++;
            }
        }
    }
}

function get_Number() {
    return parseInt(question());
}

function perfectNumber(numb) {
    let sum = 0;
    let count = 1;

    while (count < numb) {
        if (numb % count === 0) {
            sum += count;
        }

        count++;
    }

    if (sum === numb) {
        return true;
    } else {
        return false;
    }
}

function print(texto) {
    return console.log(texto);
}

main();