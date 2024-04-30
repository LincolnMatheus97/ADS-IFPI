import { question } from "readline-sync";

function main() {
    let entrada = get_Text().split(` `);
    let a = parseInt(entrada[0]);
    let b = parseInt(entrada[1]);
    let c = parseInt(entrada[2]);

    while(a !== 0) {
        let areaTotal = a * b;
        let areaMaximaTotal = areaTotal / c;
        let lado =(Math.sqrt(areaMaximaTotal));
        print(`${parseInt(lado * 10)}`);

        entrada = get_Text().split(` `);
        a = parseInt(entrada[0]);
        b = parseInt(entrada[1]);
        c = parseInt(entrada[2]);

    }

}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();