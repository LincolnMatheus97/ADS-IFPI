import { question } from "readline-sync";

function main() {
    let [dd, mm, aa] = get_Text().split(`/`);
    print(`${mm}/${dd}/${aa}`);
    print(`${aa}/${mm}/${dd}`);
    print(`${dd}-${mm}-${aa}`);

}

function get_Text() {
    return question();
}

function print(texto) {
    console.log(texto);
}

main();