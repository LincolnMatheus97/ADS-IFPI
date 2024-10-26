#include <stdio.h>
#include <iostream>
#include <string.h>
using namespace std;

main() {
    double salario;
    cin >> salario;

    string percentual;
    double reajuste = 0.0;

    if (salario >= 0.0 && salario <= 400.0) {
        reajuste = (salario * 0.15);
        percentual = "15 %";
    } else if (salario > 400.0 && salario <= 800.0) {
        reajuste = (salario * 0.12);
        percentual = "12 %";
    } else if (salario > 800.0 && salario <= 1200.0) {
        reajuste = (salario * 0.10);
        percentual = "10 %";
    } else if (salario > 1200.0 && salario <= 2000.0) {
        reajuste = (salario * 0.07);
        percentual = "7 %";
    } else if (salario > 2000.0) {
        reajuste = (salario * 0.04);
        percentual = "4 %";
    }

    printf("Novo salario: %.2lf\n", salario + reajuste);
    printf("Reajuste ganho: %.2lf\n", reajuste);
    printf("Em percentual: %s\n", percentual.c_str());
}