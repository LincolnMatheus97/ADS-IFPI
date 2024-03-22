function main() {
    let I = 1;
    let J = 7;

    while (I <= 9) {
        let J1 = J;
        let contador = 1;
        while (contador <= 3) {
            print(`I=${I} J=${J1}`);
            J1--;
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