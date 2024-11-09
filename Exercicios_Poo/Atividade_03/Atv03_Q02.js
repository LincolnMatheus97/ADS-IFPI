function saudacao(nome, pronome) {
    if (pronome != null) {
        console.log("".concat(pronome, " ").concat(nome));
    }
    if (pronome == null) {
        console.log("Sr ".concat(nome));
    }
}
function main() {
    var nome = "Sávia";
    var pronome = "Sra";
    saudacao(nome, pronome);
}
main();
