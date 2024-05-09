import { question } from "readline-sync";

function main() {
    let a = get_Text();

    while (a !== ``) {
        let [c, n] = a.split(` `).map(Number);
        let letras = {};
        for (let i = 1; i <= 255; i++) {
            letras[i] = i;
        }

        let zenit = get_Text().toLowerCase();
        let polar = get_Text().toLowerCase();
        let zenitMaiusculo = zenit.toUpperCase();
        let polarMaiusculo = polar.toUpperCase();

        for (let j = 0; j < c; j++) {
            letras[zenitMaiusculo.charCodeAt(j)] = polarMaiusculo.charCodeAt(j);
            letras[polarMaiusculo.charCodeAt(j)] = zenitMaiusculo.charCodeAt(j);
            letras[zenit.charCodeAt(j)] = polar.charCodeAt(j);
            letras[polar.charCodeAt(j)] = zenit.charCodeAt(j);

        }

        for (let k = 0; k < n; k++) {
            let s = get_Text().split(` `).map(ch => String.fromCharCode(letras[ch.charCodeAt(0)])).join(``);
            print(s);
        }
        print(``);
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