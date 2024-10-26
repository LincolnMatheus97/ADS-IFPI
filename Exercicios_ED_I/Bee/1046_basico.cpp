#include <stdio.h>
#include <iostream>
#include <cmath>
using namespace std;

main() {
    int a, b;
    cin >> a >> b;

    int intervalo = a - b;
    int horas_Jogadas = 0;

    if (intervalo < 0) {
        intervalo *= -1;
        horas_Jogadas = intervalo;
    } else {
        horas_Jogadas = 24 - intervalo;
    }
    cout << "O JOGO DUROU " << horas_Jogadas << " HORA(S)" << endl;
}