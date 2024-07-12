import { question } from "readline-sync";

function main() {
    let nQualquer = get_Number();
    let potencia = nQualquer * nQualquer;
    let casasBrancas = (potencia / 2);
    let casasPretas = potencia - casasBrancas;

    if (!(nQualquer % 2 === 0)) {
        casasBrancas = Math.ceil((potencia / 2));
        casasPretas = potencia - casasBrancas;
        print(`${casasBrancas} casas brancas e ${casasPretas} casas pretas`);

    } else {
        print(`${casasBrancas} casas brancas e ${casasPretas} casas pretas`);

    }

}

function get_Number() {
    return Number(question());
    
}

function print(texto) {
    return console.log(texto);

}
main();