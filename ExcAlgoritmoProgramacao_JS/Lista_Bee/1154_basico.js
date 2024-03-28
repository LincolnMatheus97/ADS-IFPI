import { question } from "readline-sync";

function main() {
    let ageSum = 0;
    let ageCount = 0;

    while (true) {
        let age = get_Number();
        if (age < 0) {
            break;
        }

        ageSum += age;
        ageCount++;
    }
    
    let average = (ageSum / ageCount);
    print(average.toFixed(2));
}

function get_Number() {
    return parseInt(question());
}

function print(texto) {
    return console.log(texto);
}

main();