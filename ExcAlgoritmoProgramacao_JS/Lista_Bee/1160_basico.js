import { question } from "readline-sync";

function main() {
    const T = get_Number();
    let count = 1;

    while (count <= T) {
        let message;
        let data = get_Text().split(` `);

        let pA = parseInt(data[0]);
        let pB = parseInt(data[1]);
        let g1 = Number(data[2]);
        let g2 = Number(data[3]);

        let years = calculateYears(pA, pB, g1, g2);

        if (years > 100) {
            message = `Mais de 1 seculo.`;
        } else {
            message = `${years} anos.`;
        }

        print(message);

        count++;
    }
}

function get_Number() {
    return parseInt(question());
}

function get_Text() {
    return question();
}

function calculateYears(numb1, numb2, numb3, numb4) {
    let pA = numb1;
    let pB = numb2;

    let pastYears = 0;

    while (pA <= pB) {
        pA += Math.floor((pA * (numb3 / 100)));
        pB += Math.floor((pB * (numb4 / 100)));

        pastYears++;

        if (pastYears > 100) {
            return 101;
        }

    }

    return pastYears;
}

function print(texto) {
    return console.log(texto);
}

main();