import { question } from "readline-sync";

function main() {
    let [H, Z, L] = get_Text().split(` `).map(Number);
    if ((Z < H && H < L) || (L < H && H < Z)) {
        print(`huguinho`);

    } else if ((H < Z && Z < L) || (L < Z && Z < H)) {
        print(`zezinho`);

    } else {
        print(`luisinho`);

    }

}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();