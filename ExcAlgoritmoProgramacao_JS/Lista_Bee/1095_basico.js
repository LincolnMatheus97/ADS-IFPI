function main() {
    let J = 60;
    let I = 1;

    while(J >= 0) {
        print(`I=${I} J=${J}`);

        J -= 5;
        I += 3;
    }
}

function print(texto) {
    return console.log(texto);
}

main();