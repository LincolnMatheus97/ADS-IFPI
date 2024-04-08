import { question } from "readline-sync";

function main() {
    const TOTAL_DISTANCE = 600;
    const TOTAL_TANK = 50;

    let kilometersTraveled = get_number(`\nQual foi a distancia percorrida ate agora: `);
    let litersSpent = get_number(`\nQuantos litros de gasolina foram gastos ate agora: `);
    let remainingDistance = kilometersTraveled;
    let remainingGasoline = litersSpent;

    while (remainingDistance < TOTAL_DISTANCE && remainingGasoline < TOTAL_TANK) {
        kilometersTraveled = get_number(`\nQual foi a distancia percorrida ate agora: `);
        litersSpent = get_number(`\nQuantos litros de gasolina foram gastos ate agora: `);

        remainingDistance += kilometersTraveled;
        remainingGasoline += litersSpent;
    }

    if (remainingDistance === TOTAL_DISTANCE) {
        print(`\nO carro chegou a seu destino !`);
    } else if (remainingGasoline === TOTAL_TANK) {
        print(`\nO carro parou antes de chegar no seu destino por falta de combustível !`)
    }

    let kilometersPerLiters = remainingDistance / remainingGasoline;
    print(`O carro faz ${kilometersPerLiters.toFixed(2)} por litro de gasolina.\n`);

}

function get_number(text) {
    return Number(question(text));
}

function print(text) {
    return console.log(text);
}

main();