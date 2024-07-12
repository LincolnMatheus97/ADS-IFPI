import { question } from "readline-sync";

function main() {
    let caso = get_Text();

    while (caso !== ``) {
        let [horaEmGrau, minutoEmGrau] = caso.split(` `).map(Number);
        
        let hora = horaEmGrau / 30;
        let minuto = minutoEmGrau / 6;
        let horaAjustada, minutoAjustado;
        
        if(hora >= 0 && hora <= 9) {
            horaAjustada = `0` + `${hora}`;

        }else {
            horaAjustada = `${hora}`;

        }

        if(minuto >= 0 && minuto <= 9) {
            minutoAjustado = `0` + `${minuto}`;

        }else {
            minutoAjustado = `${minuto}`;

        }

        print(`${horaAjustada}:${minutoAjustado}`);

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