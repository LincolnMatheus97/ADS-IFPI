import { question } from "readline-sync";

function main() {
    const texto = get_Text();
    print(`Nao se refuta ciencia com opiniao`);
    
}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();