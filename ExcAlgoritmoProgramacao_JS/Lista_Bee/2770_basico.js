import { question } from "readline-sync";

function main() {
    let entrada = get_Text();

    while (entrada !== ``) {
        let a = entrada.split(` `).map(Number);
        let b = a.slice(0, 2).sort((x, y) => x - y);
        let [x, y, z] = [b[0], b[1], a[2]];

        for (let i = 0; i < z; i++) {
            let w = get_Text().split(` `).map(Number).sort((a, b) => a - b);
            let [xi, yi] = [w[0], w[1]];

            if (xi <= x && yi <= y) {
                print(`Sim`);
            } else {
                print(`Nao`);
            }
        }

        entrada = get_Text();
    }
}

function get_Text() {
    return question();
}

function print(texto) {
    console.log(texto);
}

main();