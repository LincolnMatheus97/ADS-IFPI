import { question } from "readline-sync";

function main() {
    const N = get_number();

    if (N_Valido(N)) {
        let inicio_tabuada = 1;
        const final_tabuada = 10;

        while (inicio_tabuada <= final_tabuada) {
            let resultado = inicio_tabuada * N;
            print(`${inicio_tabuada} x ${N} = ${resultado}`);

            inicio_tabuada++;
        }
    }
}

function get_number() {
    return parseInt(question());
}

function print(texto) {
    return console.log(texto);
}

function N_Valido(numero) {
    return (numero > 2 && numero < 1_000)
}

main();