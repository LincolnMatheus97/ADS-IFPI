#include <stdio.h>
#include <iostream>
#include <string.h>
using namespace std;

main() {
    double salario;
    cin >> salario;

    double imposto = 0.0;

    if (salario >= 0.0 && salario <= 2000.0) {
        cout << "Isento" << endl;
    } else if (salario > 2000.0 && salario <= 3000.0) {
        imposto = (salario - 2000.0) * 0.08;
        printf("R$ %.2lf\n", imposto);
    } else if (salario > 3000.0 && salario <= 4500.0) {
        imposto = (1000.0 * 0.08) + ((salario - 3000.0) * 0.18);
        printf("R$ %.2lf\n", imposto);
    } else if (salario > 4500.0) {
        imposto = (1000.0 * 0.08) + (1500.0 * 0.18) + ((salario - 4500.0) * 0.28);
        printf("R$ %.2lf\n", imposto);
    }

}