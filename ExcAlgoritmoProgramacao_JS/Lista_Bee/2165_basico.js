import { question } from "readline-sync";

function main() {
    let tweet = get_Text();
    print(tweet.length > 140 ? `MUTE` : `TWEET`);
}

function get_Text() {
    return question();
}

function print(texto) {
    console.log(texto);
}

main();