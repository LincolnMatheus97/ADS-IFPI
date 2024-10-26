#include <stdio.h>
#include <iostream>

using namespace std;

main() {
    double a, b, c;
    cin >> a >> b >> c;

    double area_TrianRetang = (a * c) / 2;
    double area_Circulo = 3.14159 * (c * c);
    double area_Trapezio = ((a + b) * c) / 2;
    double area_Quadrado = b * b;
    double area_Retangulo = a * b;

    printf("TRIANGULO: %.3lf\n", area_TrianRetang);
    printf("TRIANGULO: %.3lf\n", area_Circulo);
    printf("TRIANGULO: %.3lf\n", area_Trapezio);
    printf("TRIANGULO: %.3lf\n", area_Quadrado);
    printf("TRIANGULO: %.3lf\n", area_Retangulo);
}