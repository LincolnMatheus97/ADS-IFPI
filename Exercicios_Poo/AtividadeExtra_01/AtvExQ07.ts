class Retangulo {
    base: number = 0;
    altura: number = 0;

    calcular_Area(): number {
        return this.base * this.altura;
    }

    calcular_Perimetro(): number {
        return (2 * this.base) + (2 * this.altura);
    }
}

let retangulo : Retangulo;
retangulo = new Retangulo();
retangulo.base = 10;
retangulo.altura = 5;

console.log(`A área do nosso retângulo é igual a ${retangulo.calcular_Area()}`);
console.log(`O perimetro do nosso retângulo é igual a ${retangulo.calcular_Perimetro()}`);