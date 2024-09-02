import { question } from "readline-sync";

function main() {
    let quantidade_Casos = get_Number();

    for (let i = 0; i < quantidade_Casos; i++) {
        let string = get_Text().split(` `)
        let lista_String = string.filter((a) => a !== ``);
        let mensagem_Oculta = ``;
        
        for (let j = 0; j < lista_String.length; j++) {
            if (lista_String[i] !== ``) {
                mensagem_Oculta += lista_String[j][0];
            }
        }

        print(mensagem_Oculta);
    }
}

function get_Number() {
    return Number(question());
}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();