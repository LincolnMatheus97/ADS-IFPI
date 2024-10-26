#include <stdio.h>
#include <iostream>
using namespace std;

main() {
    double a, b, c;
    cin >> a >> b >> c;

    if (a + b > c && a + c > b && b + c > a) {
        double perimetro = a + b + c;
        printf("Perimetro = %.1lf\n", perimetro);
    } else {
        double area_Trapezio = ((a + b) * c) / 2;
        printf("Area = %.1lf\n", area_Trapezio);
    }
}