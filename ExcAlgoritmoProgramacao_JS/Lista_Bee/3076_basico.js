import { question } from "readline-sync";

function main() {
    let caso = get_Text();

    while (caso !== ``) {
        let ano_Caso = parseInt(caso);
        let seculo_Do_Caso = Math.ceil(ano_Caso / 100);
        print(seculo_Do_Caso);

        caso = get_Text();

    }
}

function get_Text() {
    return question();

}

function print(texto) {
    return console.log(texto);

}

main();