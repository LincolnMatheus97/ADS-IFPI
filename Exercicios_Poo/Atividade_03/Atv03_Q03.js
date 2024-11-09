function numeros_Array(numeros) {
    var mensagem = "";
    numeros.forEach(function (element) {
        if (element === numeros[0]) {
            mensagem += "".concat(element);
        }
        else {
            mensagem += "-".concat(element);
        }
    });
    return mensagem;
}
function main() {
    var numeros = [1, 2, 3, 4];
    var texto = numeros_Array(numeros);
    console.log(texto);
}
main();
