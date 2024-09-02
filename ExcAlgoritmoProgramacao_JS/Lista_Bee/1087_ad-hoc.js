import { question } from "readline-sync";

function main() {
    let [x1, y1, x2, y2] = get_Text().split(` `).map(Number);

    while (x1 !== 0) {
        let dx = Math.abs(x1 - x2);
        let dy = Math.abs(y1 - y2);
        
        if (dx === 0 && dy === 0) {
            print(`0`);
        } else if (dx === dy || dx === 0 || dy === 0) {
            print(`1`);
        } else {
            print(`2`);
        }

        [x1, y1, x2, y2] = get_Text().split(` `).map(Number);
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