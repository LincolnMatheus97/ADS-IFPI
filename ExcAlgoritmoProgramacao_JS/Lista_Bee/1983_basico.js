import { question } from "readline-sync";

function main() {
    const N = get_Number();
    let codMaiorNota = ``;
    let maiorNota = 0;

    for (let i = 0; i < N; i++) {
        let codNota = get_Text().split(` `);
        let nota = parseFloat(codNota[1]);

        if (nota >= 8.0) {
            if (nota > maiorNota) {
                codMaiorNota = `${codNota[0]}`;
                maiorNota = nota;
            }
        }
    }

    if(codMaiorNota === ``) {
        codMaiorNota = `Minimum note not reached`;
    }

    print(`${codMaiorNota}`);

}

function get_Number() {
    return Number(question());
}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();