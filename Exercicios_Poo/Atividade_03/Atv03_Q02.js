"use strict";
function saudacao(nome, pronome) {
    if (pronome != null) {
        console.log(`${pronome} ${nome}`);
    }
    if (pronome == null) {
        console.log(`Sr ${nome}`);
    }
}
function main() {
    const nome = "Sávia";
    const pronome = "Sra";
    saudacao(nome, pronome);
}
main();
//# sourceMappingURL=Atv03_Q02.js.map