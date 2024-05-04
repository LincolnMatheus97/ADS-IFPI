import { question } from "readline-sync";

function main() {
    const N = get_Number();

    for (let i = 0; i < N; i++) {
        let [h, m, o] = get_Text().split(` `).map(Number);

        if ((h >= 10) && (m >= 10)) {
            if (o === 1) {
                print(`${h}:${m} - A porta abriu!`);
            } else {
                print(`${h}:${m} - A porta fechou!`);
            }
        } else {
            if(h >= 0 && h < 10) {
                h = `0` + h;
            }
            if(m >= 0 && m < 10){
                m = `0` + m;
            }
            if (o === 1) {
                print(`${h}:${m} - A porta abriu!`);
            } else {
                print(`${h}:${m} - A porta fechou!`);
            }
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