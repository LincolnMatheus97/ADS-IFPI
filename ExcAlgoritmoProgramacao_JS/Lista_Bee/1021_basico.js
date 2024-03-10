import { question } from "readline-sync";

function main() {
    const valor = get_number();

    let dinheiro = Calcular_Notas_Moedas(valor);

    print(`NOTAS:`);
    print(`${dinheiro[0]} nota(s) de R$ 100.00`);
    print(`${dinheiro[1]} nota(s) de R$ 50.00`);
    print(`${dinheiro[2]} nota(s) de R$ 20.00`);
    print(`${dinheiro[3]} nota(s) de R$ 10.00`);
    print(`${dinheiro[4]} nota(s) de R$ 5.00`);
    print(`${dinheiro[5]} nota(s) de R$ 2.00`);
    print(`MOEDAS:`);
    print(`${dinheiro[6]} moeda(s) de R$ 1.00`);
    print(`${dinheiro[7]} moeda(s) de R$ 0.50`);
    print(`${dinheiro[8]} moeda(s) de R$ 0.25`);
    print(`${dinheiro[9]} moeda(s) de R$ 0.10`);
    print(`${dinheiro[10]} moeda(s) de R$ 0.05`);
    print(`${dinheiro[11]} moeda(s) de R$ 0.01`);
}

function get_number() {
    return parseFloat(question());
}

function print(texto) {
    return console.log(texto);
}

function Calcular_Notas_Moedas(num) {
    num = Math.round(num * 100); //Convertando para centavos.

    let nt100 = Math.floor(num / 10000);
    let nt50 = Math.floor((num % 10000) / 5000);
    let nt20 = Math.floor(((num % 10000) % 5000) / 2000);
    let nt10 = Math.floor(((num % 5000) % 2000) / 1000);
    let nt5 = Math.floor(((num % 2000) % 1000) / 500);
    let nt2 = Math.floor((num % 500) / 200);

    let md1_00 = Math.floor(((num % 500) % 200) / 100);
    let md0_50 = Math.floor(((num % 200) % 100) / 50);
    let md0_25 = Math.floor(((num % 100) % 50) / 25);
    let md0_10 = Math.floor(((num % 50) % 25) / 10);
    let md0_05 = Math.floor(((num % 25) % 10) / 5);
    let md0_01 = Math.floor((num % 10) % 5);

    return [nt100, nt50, nt20, nt10, nt5, nt2, md1_00, md0_50, md0_25, md0_10, md0_05, md0_01]
}

main();