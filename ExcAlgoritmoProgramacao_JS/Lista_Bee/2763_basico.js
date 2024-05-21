import { question } from "readline-sync";

function main() {
    let [p1, p2, p3, p4] = get_Text().split(/[.-]/);
    print(p1);
    print(p2);
    print(p3);
    print(p4);

}

function get_Text() {
    return question();
}

function print(texto) {
    console.log(texto);
}

main();