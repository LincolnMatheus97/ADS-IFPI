"use strict";
class Triangulo {
    constructor(lado1, lado2, lado3) {
        this.lado_1 = lado1;
        this.lado_2 = lado2;
        this.lado_3 = lado3;
    }
    ehTriangulo() {
        return (this.lado_1 <= this.lado_2 + this.lado_3);
    }
    ehIsoceles() {
        if (this.ehTriangulo()) {
            return ((this.lado_1 === this.lado_2) || (this.lado_2 === this.lado_3) || (this.lado_3 === this.lado_1));
        }
    }
    ehEquilatero() {
        if (this.ehTriangulo()) {
            return (this.lado_1 === this.lado_2 && this.lado_2 === this.lado_3);
        }
    }
    ehEscaleno() {
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
//# sourceMappingURL=Atv4_Q07.js.map