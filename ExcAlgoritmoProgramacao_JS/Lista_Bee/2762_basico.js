import { question } from "readline-sync";

function main() {
    let [num1, num2] = get_Text().split(`.`).map(Number);
    print(`${num2}.${num1}`);

}

function get_Text() {
    return question();
}

function print(texto) {
    console.log(texto);
}

main();