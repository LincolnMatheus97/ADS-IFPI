import { question } from "readline-sync";

function main() {
    const [pI, pF] = get_Text().split(` `);
    const d1 = letraParaNumero(pI[0]) - letraParaNumero(pF[0]);
    const d2 = parseInt(pI[1]) - parseInt(pF[1]);

    if (Math.abs(d1 * d2) === 2) {
        print(`VALIDO`);
    } else {
        print(`INVALIDO`);
    }

}

function letraParaNumero(letra) {
    const conjunto = [`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`];

    if(conjunto.includes(letra)) {
        return conjunto.indexOf(letra) + 1;
    }
}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();