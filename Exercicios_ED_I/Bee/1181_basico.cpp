#include <stdio.h>
#include <iostream>
#include <vector>
using namespace std;

main() {
    int i, n;
    double somatorio = 0;
    string tipo;
    vector<vector<double>> matriz;
    cin >> n;
    cin >> tipo;

    for (i = 0; i < 12; i++) {
        vector<double> linha;
        int j;

        for (j = 0; j < 12; j++) {
            double numero;
            cin >> numero;

            if (i == n) {
                somatorio += numero;
            }
            linha.push_back(numero);
        }
        matriz.push_back(linha);
    }
    double media = somatorio / 12.0;

    if (tipo == "S") {
        printf("%.1lf\n", somatorio);
    } else if (tipo == "M"){
        printf("%.1lf\n", media);
    }
}