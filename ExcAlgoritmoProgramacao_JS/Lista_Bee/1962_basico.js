import { question } from "readline-sync";

function main() {
    const N = get_Number();

    for (let i = 0; i < N; i++) {
        let ano = get_Number();

        if (ano < 2015) {
            let anosReformado = Math.abs(2015 - ano);
            print(`${anosReformado} D.C.`);
        } else {
            let anosReformado = Math.abs(2014 - ano);
            print(`${anosReformado} A.C.`);
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