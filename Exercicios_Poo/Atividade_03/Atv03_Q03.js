"use strict";
function numeros_Array(numeros) {
    let mensagem = "";
    numeros.forEach(element => {
        if (element === numeros[0]) {
            mensagem += `${element}`;
        }
        else {
            mensagem += `-${element}`;
        }
    });
    return mensagem;
}
function main() {
    const numeros = [1, 2, 3, 4];
    const texto = numeros_Array(numeros);
    console.log(texto);
}
main();
//# sourceMappingURL=Atv03_Q03.js.map