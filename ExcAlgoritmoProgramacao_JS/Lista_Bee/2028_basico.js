import { question } from "readline-sync";

function main() {
    let n = get_Text();
    let caso = 0;

    while (n !== null && n !== ``) {
        let numeroN = parseInt(n);
        let sequencia = `0`;
        let totalSequencia = 1;

        for (let i = 1; i <= numeroN; i++) {

            for (let j = 1; j <= i; j++) {
                sequencia += ` ${i}`;
                totalSequencia++;
            }

        }
        caso++;
        totalSequencia === 1 ? print(`Caso ${caso}: 1 numero`) : print(`Caso ${caso}: ${totalSequencia} numeros`);
        print(sequencia);
        print(``);
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