import { question } from "readline-sync";

function main() {
    let quantidade_Casos = get_Number();

    for (let i = 0; i < quantidade_Casos; i++) {
        let [string_1, string_2] = get_Text().split(` `);
        let string_Concatenada = ``;

        for (let m = 0; string_1.length > string_2.length ? m < string_1.length : m < string_2.length; m++) {
            if (m >= string_1.length && m <= string_2.length) {
                string_Concatenada += string_2[m];

            } else if (m <= string_1.length && m >= string_2.length) {
                string_Concatenada += string_1[m];

            } else {
                string_Concatenada += string_1[m];
                string_Concatenada += string_2[m];
            }

        }

        print(string_Concatenada);

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