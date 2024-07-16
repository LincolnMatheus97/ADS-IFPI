import { question } from "readline-sync";

function main() {
    const caso_Padrao = get_Text();
    const caso_Teste = get_Text();

    if (caso_Padrao.length < caso_Teste.length) {
        print(`no`);

    } else {
        print(`go`);

    }

}

function get_Text() {
    return question();

}

function print(texto) {
    return console.log(texto);

}
main();