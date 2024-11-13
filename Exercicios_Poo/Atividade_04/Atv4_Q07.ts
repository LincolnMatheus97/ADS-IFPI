class Triangulo {
    lado_1: number;
    lado_2: number;
    lado_3: number;

    constructor (lado1: number, lado2: number, lado3: number) {
        this.lado_1 = lado1;
        this.lado_2 = lado2;
        this.lado_3 = lado3;
    }

    ehTriangulo(): boolean {
        return (this.lado_1 <= this.lado_2 + this.lado_3);
    }

    ehIsoceles(): any {
        if (this.ehTriangulo()) {
            return ((this.lado_1 === this.lado_2) || (this.lado_2 === this.lado_3) || (this.lado_3 === this.lado_1));
        }
    }

    ehEquilatero(): any {
        if (this.ehTriangulo()) {
            return (this.lado_1 === this.lado_2 && this.lado_2 === this.lado_3);
        }
    }

    ehEscaleno(): any {
        if (this.ehTriangulo()) {
            return (this.lado_1 != this.lado_2 && this.lado_2 != this.lado_3 && this.lado_3 != this.lado_1);
        }
    }
}

let tri1 = new Triangulo(10, 10, 10);
let tri2 = new Triangulo(2, 2, 4);
let tri3 = new Triangulo(2, 3, 4);
let tri4 = new Triangulo(10, 2, 5);

console.log(tri1.ehEquilatero());
console.log(tri2.ehIsoceles());
console.log(tri3.ehEscaleno());
console.log(tri4.ehTriangulo());