import { question } from "readline-sync";

function main() {
    const N = get_Number();
    let count = 1;

    while (count <= N) {
        let x = get_Number();

        let bool = primeNumber(x);

        if (bool === true) {
            print(`${x} eh primo`);
        } else {
            print(`${x} nao eh primo`);
        }
    count++;
    }

}

function get_Number() {
    return parseInt(question());
}

function primeNumber(numb) {
    if (numb <= 1) {
        return false;
    } else if (numb <= 3) {
        return true;
    }

    if (numb % 2 === 0 || numb % 3 === 0) {
        return false;
    }

    let divider = 5;
    while (divider * divider <= numb) {
        if (numb % divider === 0 || numb % (divider + 2) === 0) {
            return false;
        }
        divider += 6;
    }
    
    return true;
}


function print(texto) {
    return console.log(texto);
}

main();