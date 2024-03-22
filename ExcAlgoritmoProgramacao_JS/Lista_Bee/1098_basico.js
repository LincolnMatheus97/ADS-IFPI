function main() {
    let I = 0;
    let J = 10;

    while (I <= 20) {
        let J1 = J;
        let contador = 1;
        while (contador <= 3) {
            print(`I=${I / 10} J=${J1 / 10}`);
            J1 += 10
            contador++;
        }
        I += 2;
        J += 2;
    }
}

function print(texto) {
    return console.log(texto);
}

main();