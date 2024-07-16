import { question } from "readline-sync";

function main() {
    let [possuo_Garrafas, garrafas_Encontradas, garrafas_Necessarias] = get_Text().split(` `).map(Number);
    let garrafas_Somadas = possuo_Garrafas + garrafas_Encontradas;
    let garrafas_Tomadas = 0;

    while (garrafas_Somadas >= garrafas_Necessarias) {
        garrafas_Tomadas = garrafas_Tomadas + Math.floor(garrafas_Somadas / garrafas_Necessarias);
        garrafas_Somadas = Math.floor(garrafas_Somadas / garrafas_Necessarias) + (garrafas_Somadas % garrafas_Necessarias);

    }

    print(garrafas_Tomadas);

}

function get_Text() {
    return question();

}

function print(texto) {
    return console.log(texto);

}

main();