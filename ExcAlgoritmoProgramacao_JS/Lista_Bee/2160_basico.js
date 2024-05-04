import { question } from "readline-sync";

function main() {
    let nomeFormulario = get_Text();
    print(nomeFormulario.length > 80 ? `NO` : `YES`);
}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();