import { question } from "readline-sync";

function main() {
    const valores = get_number();

    const Nvalores = valores.split(` `);
    let A = parseInt(Nvalores[0]);
    let B = parseInt(Nvalores[1]);
    let C = parseInt(Nvalores[2]);

    let maiorAB = Eh_Maior(A, B);
    let maiorTotal = Eh_Maior(maiorAB, C)

    print(`${maiorTotal} eh o maior`);
}

function get_number() {
    return (question(`Numero: `));
}

function print(texto) {
    return console.log(texto);
}

function Eh_Maior(A, B) {
    if (A > B) {
        return A
    }
    return B
}

main();