import { question } from "readline-sync";

function main() {
    let quantidade_Casos = get_Number();

    for (let i = 0; i < quantidade_Casos; i++) {
        let mensagem_Criptografada = get_Text();
        let meio_Da_Mensagem = Math.floor(mensagem_Criptografada.length / 2);

        let primeira_Metade = mensagem_Criptografada.substring(0, meio_Da_Mensagem);
        let segunda_Metade = mensagem_Criptografada.substring(meio_Da_Mensagem);

        let primeira_Metade_Descriptografada = primeira_Metade.split(``).reverse().join(``);
        let segunda_Metade_Descriptografada = segunda_Metade.split(``).reverse().join(``);

        let mensagem_Descriptografada = `${primeira_Metade_Descriptografada}` + `${segunda_Metade_Descriptografada}`;

        print(mensagem_Descriptografada);
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