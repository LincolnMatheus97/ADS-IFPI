import { question } from "readline-sync";

function main() {
    let a = get_Text();

    while (a !== ``) {
        let m = parseInt(a);
        let v = [];

        for (let i = 0; i < m; i++) {
            v.push(get_Number());
        }

        let n = get_Number();
        let soma = 0;

        for (let i = m - 1; i >= 0; i -= n) {
            soma += v[i];
        }

        if (ehPrimo(soma)) {
            print(`You’re a coastal aircraft, Robbie, a large silver aircraft.`)
        } else {
            print(`Bad boy! I’ll hit you.`);
        }

        a = get_Text();
    }
}

function get_Text() {
    return question();
}

function get_Number() {
    return Number(question());
}

function ehPrimo(num) {
    if (num <= 1) {
        return false;
    } else if (num === 2) {
        return true;
    } else if (num % 2 === 0) {
        return false;
    } else if (num === 3 || num === 5 || num === 7) {
        return true;
    } else if (num % 3 === 0 || num % 5 === 0 || num % 7 === 0) {
        return false;
    } else {
        return true;
    }
}

function print(texto) {
    return console.log(texto);
}

main();