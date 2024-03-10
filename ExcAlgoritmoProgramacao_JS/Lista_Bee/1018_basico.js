import { question } from "readline-sync";

function main() {
    let valor = get_number();

    if (Entre_0_e_1000000(valor)) {
        let lista = Calcular_Nota(valor);

        print(`${valor}`)
        print(`${lista[0]} nota(s) de R$ 100,00`);
        print(`${lista[1]} nota(s) de R$ 50,00`);
        print(`${lista[2]} nota(s) de R$ 20,00`);
        print(`${lista[3]} nota(s) de R$ 10,00`);
        print(`${lista[4]} nota(s) de R$ 5,00`);
        print(`${lista[5]} nota(s) de R$ 2,00`);
        print(`${lista[6]} nota(s) de R$ 1,00`);

    } else {
        return main();
    }

}

function get_number() {
    return Number(question(`Numero: `));
}

function print(texto) {
    return console.log(texto);
}

function Entre_0_e_1000000(num) {
    return (num > 0 && num < 1000000);
}

function Calcular_Nota(num) {
    let nt100 = Math.floor(num / 100);
    let nt50 = Math.floor((num % 100) / 50);
    let nt20 = Math.floor(((num % 100) % 50) / 20);
    let nt10 = Math.floor(((num % 50) % 20) / 10);
    let nt5 = Math.floor(((num % 20) % 10) / 5);
    let nt2 = Math.floor(((num % 10) % 5) / 2)
    let nt1 = Math.floor((num % 5) % 2);

    return [nt100, nt50, nt20, nt10, nt5, nt2, nt1];
}

main();
