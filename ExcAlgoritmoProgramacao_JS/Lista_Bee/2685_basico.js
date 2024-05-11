import { question } from "readline-sync";

function main() {
    let a = get_Text();

    while (a !== ``) {
        let grau = parseInt(a);
        if ((grau >= 0 && grau < 90) || grau === 360) {
            print(`Bom Dia!!`);
        } else if (grau >= 90 && grau < 180) {
            print(`Boa Tarde!!`);
        } else if (grau >= 180 && grau < 270) {
            print(`Boa Noite!!`);
        } else {
            print(`De Madrugada!!`);
        }

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