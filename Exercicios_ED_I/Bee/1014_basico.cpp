#include <stdio.h>
#include <iostream>
using namespace std;

main() {
    int distancia = 0;
    float total_Gasto = 0.0;

    cin >> distancia;
    cin >> total_Gasto;

    float consumo_Medio = distancia / total_Gasto;
    printf("%.3f km/l\n", consumo_Medio);
}