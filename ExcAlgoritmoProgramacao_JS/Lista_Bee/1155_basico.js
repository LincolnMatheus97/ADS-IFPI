function main() {
    let s = 0;
    let count = 1;

    while (count <= 100) {
        s += (1 / count);
        count++;
    }
    print(s.toFixed(2));
}

function print(texto) {
    return console.log(texto);
}

main();