import { question } from "readline-sync";

function main() {
    let acm = get_Text();

    while (acm !== `0`) {
        let caso = acm.split(``).map(Number);
        let decimal = 0;
        if (acm.length === 5) {
            decimal = caso[0] * 120 + caso[1] * 24 + caso[2] * 6 + caso[3] * 2 + caso[4] * 1;
        } else if (acm.length === 4) {
            decimal = caso[0] * 24 + caso[1] * 6 + caso[2] * 2 + caso[3] * 1;
        } else if (acm.length === 3) {
            decimal = caso[0] * 6 + caso[1] * 2 + caso[2] * 1;
        } else if (acm.length === 2) {
            decimal = caso[0] * 2 + caso[1] * 1;
        } else if (acm.length === 1){
            decimal = caso[0] * 1;
        }

        print(decimal);

        acm = get_Text();
    }
}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();