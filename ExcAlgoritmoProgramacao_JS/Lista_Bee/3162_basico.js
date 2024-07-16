import { question } from "readline-sync";

function main() {
    let quantidade_Caso = get_Number();
    let coordenadas = [];

    for (let i = 1; i <= quantidade_Caso; i++) {
        let [x, y, z] = get_Text().split(` `).map(Number);
        coordenadas.push([x, y, z]);

    }

    for (let i = 0; i < quantidade_Caso; i++) {
        let [xi, yi, zi] = coordenadas[i];
        let minDist = Infinity;

        for (let j = 0; j < quantidade_Caso; j++) {
            if (i !== j) {
                let [xj, yj, zj] = coordenadas[j];
                let dist = Math.sqrt(
                    Math.pow(xi - xj, 2) +
                    Math.pow(yi - yj, 2) +
                    Math.pow(zi - zj, 2)
                );

                if (dist < minDist) {
                    minDist = dist;

                }

            }

        }

        if (minDist <= 20) {
            print('A');

        } else if (minDist <= 50) {
            print('M');

        } else {
            print('B');

        }

    }

}

function get_Number() {
    return Number(question());

}

function get_Text() {
    return question();

}

function print(texto) {
    return console.log(texto);

}

main();