import { question } from "readline-sync";

function main() {
    let levantou = get_Text.trim();

    while (levantou !== null && levantou !== '') {
        let [horas, minutos] = levantou.split(':').map(Number);
        let minutosTotal = horas * 60 + minutos;

        if (minutosTotal > 420 && minutosTotal <= 540) {
           print(`Atraso maximo: ${Math.abs(480 - (minutosTotal + 60))}`);
        }else {
           print(`Atraso maximo: 0`);
        }
        
        levantou = get_Text.trim();
    }
}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();