import { question } from "readline-sync";

function main() {
    const duracao = get_number();

    let tempo = Calcular_Tempo(duracao);

    print(`${tempo[0]}:${tempo[1]}:${tempo[2]}`)

}

function get_number() {
    return Number(question(`Numero: `));
}

function print(texto) {
    return console.log(texto);
}

function Calcular_Tempo(num) {
    let hora = Math.floor(num / 3600);
    let minuto = Math.floor((num % 3600) / 60);
    let segundo = Math.floor(num % 60);

    return [hora, minuto, segundo]
}

main();