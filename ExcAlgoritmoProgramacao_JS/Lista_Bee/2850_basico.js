import { question } from "readline-sync";

function main() {
    let casos = get_Text();

    while (casos != ``) {
        if (casos === `esquerda`) {
            print(`ingles`);

        } else if (casos === `direita`) {
            print(`frances`);

        } else if (casos === `nenhuma`){
            print(`portugues`);

        } else {
            print(`caiu`);
            
        }
        casos = get_Text();

    }

}

function get_Text() {
    return question();

}

function print(texto) {
    return console.log(texto);
}

main();