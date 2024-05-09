import { question } from "readline-sync";

function main() {
    const NOTA = get_Number();
    NOTA === 0 ? print(`E`) : NOTA >= 1 && NOTA < 36 ? print(`D`) : NOTA >= 36 && NOTA < 61 ? print(`C`) : NOTA >= 61 && NOTA < 86 ? print(`B`) : print(`A`);

}

function get_Number() {
    return Number(question());
}

function print(texto) {
    return console.log(texto);
}

main();