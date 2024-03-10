import { question } from "readline-sync";

function main() {
    const idade = get_number();

    let valor = Calcular_Idade(idade);

    print(`${valor[0]} ano (s)`);
    print(`${valor[1]} mes (es)`);
    print(`${valor[2]} dia (s)`);

}

function get_number() {
    return Number(question());
}

function print(texto) {
    return console.log(texto);
}

function Calcular_Idade(num) {
    let ano = Math.floor(num / 365);
    let mes = Math.floor((num % 365) / 30);
    let dia = Math.floor((num % 365) % 30);

    return [ano, mes, dia]
}

main();