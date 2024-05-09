import { question } from "readline-sync";

function main() {
    const N = get_Number();

    for (let i = 0; i < N; i++) {
        let bonus = get_Number();
        let [a1, d1, l1] = get_Text().split(` `).map(Number);
        let [a2, d2, l2] = get_Text().split(` `).map(Number);
        let valorGolpe1 = calcularGolpe(a1, d1, l1, bonus);
        let valorGolpe2 = calcularGolpe(a2, d2, l2, bonus);
        
        valorGolpe1 > valorGolpe2 ? print(`Dabriel`) : valorGolpe2 > valorGolpe1 ? print(`Guarte`) : print(`Empate`);
    }
}

function calcularGolpe(a, d, l, bonus) {
    return l % 2 === 0 ? (a + d) / 2 + bonus : (a + d) / 2;
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