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
}
let retangulo;
retangulo = new Retangulo();
retangulo.base = 10;
retangulo.altura = 5;
console.log(`A área do nosso retângulo é igual a ${retangulo.calcular_Area()}`);
console.log(`O perimetro do nosso retângulo é igual a ${retangulo.calcular_Perimetro()}`);
//# sourceMappingURL=AtvExQ07.js.map