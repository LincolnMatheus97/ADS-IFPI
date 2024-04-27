import { question } from "readline-sync";

function main() {
    let vetorPar = [];
    let vetorImpar = [];

    for (let i = 0; i < 15; i++) {
        let n = get_Number();

        if (!(n % 2 === 0)) {
            vetorImpar.push(n);
            if (vetorImpar.length === 5) {
                for (let m = 0; m < vetorImpar.length; m++) {
                    print(`impar[${m}] = ${vetorImpar[m]}`);

                }
                vetorImpar.splice(0, vetorImpar.length);

            }
        } else {
            vetorPar.push(n);
            if (vetorPar.length === 5) {
                for (let k = 0; k < vetorPar.length; k++) {
                    print(`par[${k}] = ${vetorPar[k]}`);

                }
                vetorPar.splice(0, vetorPar.length);

            }

        }
    }
    for (let i = 0; i < vetorImpar.length; i++) {
        print(`impar[${i}] = ${vetorImpar[i]}`);

    }

    for (let j = 0; j < vetorPar.length; j++) {
        print(`par[${j}] = ${vetorPar[j]}`);

    }
}

function get_Number() {
    return Number(question());
}

function print(texto) {
    return console.log(texto);
}

main();