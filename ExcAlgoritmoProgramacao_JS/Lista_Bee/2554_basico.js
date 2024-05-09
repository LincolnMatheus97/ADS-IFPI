import { question } from "readline-sync";

function main() {
    let a = get_Text();

    while (a !== ``) {
        let [m, k] = a.split(` `).map(Number);
        let data = `Pizza antes de FdI`;
        let swp = true;

        for (let i = 0; i < k; i++) {
            let entradas = get_Text().split(` `);
            let bol = true;
            for (let j = 1; j <= m; j++) {
                if (entradas[j] !== `1`) {
                    bol = false;
                    break;
                }

            }
            if (bol && swp) {
                swp = false;
                data = entradas[0];
            }
        }
        print(data);
        a = get_Text();

    }
}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();