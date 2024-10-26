#include <stdio.h>
#include <iostream>
#include <cmath>
using namespace std;

main() {
    int a, b, c, d;
    cin >> a >> b >> c >> d;

    int minutos_InicioJogo = (a * 60) + b;
    int minutos_FinalJogo  = (c * 60) + d;

    int intervalo = minutos_FinalJogo - minutos_InicioJogo;
    int minutos_Totais = 0;

    if (intervalo <= 0) {
        intervalo += 1440;
        minutos_Totais = intervalo;
    } else {
        minutos_Totais = intervalo;
    }

    int horas_Jogadas = minutos_Totais / 60;
    int minutos_Jogados = minutos_Totais % 60;
    
    cout << "O JOGO DUROU " << horas_Jogadas << " HORA(S) E " << minutos_Jogados << " MINUTO(S)" << endl;
}