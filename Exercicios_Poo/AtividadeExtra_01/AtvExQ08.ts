class Circulo {
    raio: number = 0;
    pi: number = 3.14;

    calcular_Area(): number {
        return this.pi * (this.raio ** 2);
    }

    calcular_Perimetro(): number {
        return 2 * this.pi * this.raio;
    }
}

let circulo: Circulo;
circulo = new Circulo();
circulo.raio = 5;

console.log(`A área do nosso circulo é igual a ${circulo.calcular_Area()}`);
console.log(`O perimetro do nosso circulo é igual a ${circulo.calcular_Perimetro().toFixed(2)}`);