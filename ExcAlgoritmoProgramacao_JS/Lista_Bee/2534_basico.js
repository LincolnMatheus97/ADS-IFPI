import { question } from "readline-sync";

function main() {
    let a = get_Text();

    while (a !== ``) {
        let [n, q] = a.split(` `).map(Number);
        let notas = [];

        for(let i = 0; i < n; i++) {
            notas.push(get_Number());
        }
        
        notas.sort((a, b) => b - a)

        for (let j = 0; j < q; j++) {
            let p = get_Number();
            print(notas[p - 1]);
        }
        a = get_Text();
    }
}

function get_Text() {
    return question();
}

function get_Number() {
    return Number(question());
}

function print(texto) {
    return console.log(texto);
}

main();