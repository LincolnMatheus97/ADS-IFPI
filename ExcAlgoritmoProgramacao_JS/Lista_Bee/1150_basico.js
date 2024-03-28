import { question } from "readline-sync";

function main() {
    const X = get_Number();
    let z = 0;

    while (true) {
        z = get_Number();
        if (z > X) {
            break;
        }
    }

    let evenTheSame = X;
    let count = 0;

    if (X > 0) {
        while (evenTheSame < z) {
            evenTheSame += X + 1;
            count++;
        }
    } else {
        while (evenTheSame < z) {
            evenTheSame -= X - 1;
            count++;

        }
    }
    print(count);
}

function get_Number() {
    return parseInt(question());
}

function print(texto) {
    return console.log(texto);
}

main();