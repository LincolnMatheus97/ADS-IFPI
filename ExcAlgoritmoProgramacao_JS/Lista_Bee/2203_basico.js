import { question } from "readline-sync";

function main() {
    let entradas = get_Text();

    while(entradas !== ``) {
        let [xf, yf, xi, yi, vi, r1, r2] = entradas.split(` `).map(Number);
        const distancia = Math.sqrt((xi - xf) ** 2 + (yi - yf) ** 2) + 1.5 * vi;
        distancia > r1 + r2 ? print(`N`) : print(`Y`);
        entradas = get_Text();
    }

}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();