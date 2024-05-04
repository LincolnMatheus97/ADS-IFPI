import { question } from "readline-sync";

function main() {
    let [abas, numeroAcoes] = get_Text().split(` `).map(Number);

    for (let i = 0; i < numeroAcoes; i++) {
        let acao = get_Text();
        
        acao === `fechou` ? abas++ : abas--;
        
    }
    print(abas);

}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();