import { question } from "readline-sync";

function main() {
    let a = get_Text();

    while (a !== ``) {
        let grau = parseFloat(a);
        let periodo = ``;
        if ((grau >= 0 && grau < 90) || grau === 360) {
            periodo += `Bom Dia!!`;
        } else if (grau >= 90 && grau < 180) {
            periodo += `Boa Tarde!!`;
        } else if (grau >= 180 && grau < 270) {
            periodo += `Boa Noite!!`;
        } else {
            periodo += `De Madrugada!!`;
        }

        let hora = Math.floor((grau / 15) % 24) + 6;
        let minuto = Math.floor((grau * 4) % 60);
        let segundo = Math.floor((minuto * 60) % 60);

        if(hora >= 24) {
            hora -= 24;
        }

        print(periodo);
        print(`${hora.toString().padStart(2, '0')}:${minuto.toString().padStart(2, '0')}:${segundo.toString().padStart(2, '0')}`);

        a = get_Text();
    }
}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();