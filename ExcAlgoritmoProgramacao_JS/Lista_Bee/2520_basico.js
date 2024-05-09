import { question } from "readline-sync";

function main() {
    let n = get_Text();

    while (n !== ``) {
        let [m, k] = n.split(` `).map(Number);
        let lP = 0, cP = 0, lA = 0, cA = 0;

        for (let i = 0; i < m; i++) {
            let entradas = get_Text().split(` `).map(Number);

            for (let j = 0; j < k; j++) {
                if (entradas[j] === 1) {
                    lP = i;
                    cP = j;
                }
                if (entradas[j] === 2) {
                    lA = i;
                    cA = j;
                }
            }
        }
        let tempo = Math.abs(lA - lP) + Math.abs(cA - cP);
        print(tempo);
        n = get_Text();
    }
}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();