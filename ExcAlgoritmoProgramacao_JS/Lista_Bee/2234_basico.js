import { question } from "readline-sync";

function main() {
    const [cachorroQuente, participantes] = get_Text().split(` `).map(Number);
    print((cachorroQuente / participantes).toFixed(2));
}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();