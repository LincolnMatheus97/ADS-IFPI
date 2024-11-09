function exibir() {
    var argumentos = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        argumentos[_i] = arguments[_i];
    }
    console.log(argumentos);
}
function main() {
    exibir("a", "b");
    exibir("a", "b", "c");
    exibir("a", "b", "c", "d");
}
main();
