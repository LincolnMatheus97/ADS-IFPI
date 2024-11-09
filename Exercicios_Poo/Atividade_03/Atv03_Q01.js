function eh_Par(num) {
    return (num % 2 == 0);
}
function main() {
    var numero = 11;
    var variavel = eh_Par(numero);
    console.log("\u00C9 ".concat(variavel, " que numero \u00E9 Par!"));
}
main();
