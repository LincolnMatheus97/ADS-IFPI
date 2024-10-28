#include <stdio.h>
#include <iostream>
using namespace std;

main() {
    int condicao = 1;

    while (condicao != 2) {
        double n1 = 0.0;
        cin >> n1;

        while (n1 < 0.0 || n1 > 10.0) {
            cout << "nota invalida" << endl;
            cin >> n1;
        }

        double n2 = 0.0;
        cin >> n2;

        while (n2 < 0.0 || n2 > 10.0) {
            cout << "nota invalida" << endl;
            cin >> n2;
        }

        double media = (n1 + n2) / 2.0;
        printf("media = %.2lf\n", media);
        cout << "novo calculo (1-sim 2-nao)" <<endl;
        cin >> condicao;

        while (condicao < 1 || condicao > 2) {
            cout << "novo calculo (1-sim 2-nao)" <<endl;
            cin >> condicao;
        }
    }
}