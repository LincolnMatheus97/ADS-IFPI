import { question } from "readline-sync";

function main() {
    const N = get_Number();

    for (let i = 0; i < N; i++) {
        let [w, h, x0, y0] = get_Text().split(` `).map(Number);
        let ataque = get_Text().split(` `);
        let magia = ataque[0], level = ataque[1], cx = parseInt(ataque[2]), cy = parseInt(ataque[3]);

        let raioDaMagia = determinarRaio(magia, level);
        let intercessao = determinarIntercessao(cx, cy, raioDaMagia, x0, y0, w, h);

        if (intercessao) {
            print(danoMagia(magia));
        } else {
            print(0);
        }
    }
}

function determinarRaio(elemento, level) {
    const casos = [
        { elemento: "fire", level: "1", raio: 20 },
        { elemento: "fire", level: "2", raio: 30 },
        { elemento: "fire", level: "3", raio: 50 },
        { elemento: "water", level: "1", raio: 10 },
        { elemento: "water", level: "2", raio: 25 },
        { elemento: "water", level: "3", raio: 40 },
        { elemento: "earth", level: "1", raio: 25 },
        { elemento: "earth", level: "2", raio: 55 },
        { elemento: "earth", level: "3", raio: 70 },
        { elemento: "air", level: "1", raio: 18 },
        { elemento: "air", level: "2", raio: 38 },
        { elemento: "default", level: "_", raio: 60 }
    ];
    const magiaRaio = casos.find(caso => caso.elemento === elemento && caso.level === level);
    return magiaRaio ? magiaRaio.raio : casos.find(caso => caso.elemento === "default" && caso.level === "_").raio;

}

function determinarIntercessao(cx, cy, raio, raioX, raioY, largura, altura) {
    let cDX = Math.abs(cx - (raioX + largura / 2));
    let cDY = Math.abs(cy - (raioY + altura / 2));

    if ((cDX > (largura / 2 + raio)) || (cDY > (altura / 2 + raio))) {
        return false;
    } else if ((cDX <= largura / 2) || (cDY <= altura / 2)) {
        return true;
    } else {
        return ((cDX - largura / 2) ** 2 + (cDY - altura / 2) ** 2) <= raio ** 2;
    }

}

function danoMagia(magia) {
    const casos = {
        fire: 200,
        water: 300,
        earth: 400,
        default: 100
    };

    return casos[magia] || casos.default;
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