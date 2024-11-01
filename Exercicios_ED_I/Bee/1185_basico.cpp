#include <stdio.h>
#include <iostream>
#include <vector>
using namespace std;

main() {
    int i, n;
    double somatorio = 0;
    string tipo;
    vector<vector<double>> matriz;

    cin >> tipo;

    for (i = 0; i < 12; i++) {
        vector<double> coluna;
        int j;

        for (j = 0; j < 12; j++) {
            double numero;
            cin >> numero;

            if (i + j < 12 - 1) {
                somatorio += numero;
                n++;
            }
            coluna.push_back(numero);
        }
        matriz.push_back(coluna);
    }
    double media = somatorio / static_cast<double>(n);

    if (tipo == "S") {
        printf("%.1lf\n", somatorio);
    } else if (tipo == "M"){
        printf("%.1lf\n", media);
    }
}