"use strict";
class Retangulo {
    constructor() {
        this.base = 0;
        this.altura = 0;
    }
    calcular_Area() {
        return this.base * this.altura;
    }
    calcular_Perimetro() {
        return (2 * this.base) + (2 * this.altura);
    }
    eh_Quadrado() {
        if (this.base == this.altura) {
            return true;
        }
        else {
            return false;
        }
    }
}
let r1 = new Retangulo();
r1.altura = 2;
r1.base = 2;
if (r1.eh_Quadrado()) {
    console.log(`Esse retângulo também é um quadrado.`);
}
else {
    console.log(`Esse retângulo não é um quadrado.`);
}
//# sourceMappingURL=AtvExQ06.js.map