"use strict";
class Circulo {
    constructor() {
        this.raio = 0;
        this.pi = 3.14;
    }
    calcular_Area() {
        return this.pi * (this.raio ** 2);
    }
    calcular_Perimetro() {
        return 2 * this.pi * this.raio;
    }
}
let circulo;
circulo = new Circulo();
circulo.raio = 5;
console.log(`A área do nosso circulo é igual a ${circulo.calcular_Area()}`);
console.log(`O perimetro do nosso circulo é igual a ${circulo.calcular_Perimetro().toFixed(2)}`);
//# sourceMappingURL=AtvExQ08.js.map