import { question } from "readline-sync";

function main() {
    let a = get_Text();

    while (a !== ``) {
        let k = parseInt(a);
        let produto = 0, carga = 0;

        for (let i = 0; i < k; i++) {
            let [n, c] = get_Text().split(` `).map(Number);
            produto += n * c;
            carga += c;
        }
        let ira = (produto / (carga * 100));
        print((ira.toFixed(4)));
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