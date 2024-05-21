import { question } from "readline-sync";

function main() {
    let [p1, p2] = get_Text().split(`,`);
    print(`${p1}`);
    print(`` + `${p2}`);

}

function get_Text() {
    return question();
}

function print(texto) {
    console.log(texto);
}

main();