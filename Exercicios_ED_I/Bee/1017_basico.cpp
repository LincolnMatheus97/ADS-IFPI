#include <stdio.h>
#include <iostream>
using namespace std;

main() {
    int tempo_Gasto, velocidade_Media;
    cin >> tempo_Gasto >> velocidade_Media;

    float quantidade_Litros = (tempo_Gasto * velocidade_Media) / 12.0;
    printf("%.3f\n", quantidade_Litros);
}