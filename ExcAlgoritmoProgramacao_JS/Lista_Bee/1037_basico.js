import { question } from "readline-sync";

function main() {
    const valor = get_number();

    if (Verificar_Intervalo(valor)) {
        let intervalo = Verificar_Intervalo(valor);
        print(`Intervalo ${intervalo}`);
    } else {
        print(`Fora de intervalo`)
    }

}

function get_number() {
    return Number(question());
}

function print(texto) {
    return console.log(texto);
}

function Verificar_Intervalo(num) {
    let mensagem;

    if (num >= 0) {
        if (num >= 0 && num <= 25) {
            mensagem = `[0,25]`;
        } else if (num > 25 && num <= 50) {
            mensagem = `(25,50]`
        } else if (num > 50 && num <= 75) {
            mensagem = `(50,75]`
        } else if (num > 75 && num <= 100) {
            mensagem = `(75,100]`
        }
        return mensagem;
    }
    return false;
}

main();