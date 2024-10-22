class Retangulo {
    base: number = 0;
    altura: number = 0;

    calcular_Area(): number {
        return this.base * this.altura;
    }

    calcular_Perimetro(): number {
        return (2 * this.base) + (2 * this.altura);
    }

    eh_Quadrado(): boolean {
        if(this.base == this.altura) {
            return true;
        } else {
            return false;
        }
    }
}

let r1: Retangulo = new Retangulo();
r1.altura = 2;
r1.base = 2;

if(r1.eh_Quadrado()) {
    console.log(`Esse retângulo também é um quadrado.`);
} else {
    console.log(`Esse retângulo não é um quadrado.`)
}