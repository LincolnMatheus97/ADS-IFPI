import { question } from "readline-sync";

function main() {
    let senha_correta = `2002`;

    while (true) {
        let senha = get_text();

        if (senha === senha_correta) {
            print(`Acesso Permitido`);
            break;
        } else {
            print(`Senha Invalida`);
        }
    }
}

function get_text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();