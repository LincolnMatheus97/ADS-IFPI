import { question } from "readline-sync";

function main() {
    let a = get_Text();

    while (a !== ``) {
        let [n, identificador] = a.split(` `).map(Number);
        let jogosCs = 0;

        for (let i = 0; i < n; i++) {
            let [novoIdentificador, codGame] = get_Text().split(` `).map(Number);
            if (novoIdentificador === identificador && codGame === 0) {
                jogosCs++;
            }
        }
        print(jogosCs);
        a = get_Text();
    }
}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();