function main() {
    let s = 0;
    let denominator = 1;
    let divider = 1;

    while (denominator <= 39) {
        s += denominator / divider;
        denominator += 2;
        divider *= 2;

    }
    print(s.toFixed(2));
}

function print(texto) {
    return console.log(texto);
}

main();