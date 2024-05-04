import { question } from "readline-sync";

function main() {
    let input1 = get_Text();
    let input2 = get_Text();

    while ((input1 !== null && input1 !== ``) && (input2 !== null && input2 !== ``)) {
        let volume = parseFloat(input1);
        let diametro = parseFloat(input2);
        let raio = diametro / 2;
        const PI = 3.14;

        let altura = volume / (PI * (raio ** 2));
        let area = (PI * raio ** 2);

        print(`ALTURA = ${altura.toFixed(2)}`);
        print(`AREA = ${area.toFixed(2)}`);

        input1 = get_Text();
        input2 = get_Text();
    }
}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();