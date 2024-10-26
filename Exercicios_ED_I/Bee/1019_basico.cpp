#include <stdio.h>
#include <iostream>
using namespace std;

main() {
    int segundos_totais;
    cin >> segundos_totais;

    int quantidade_Horas = segundos_totais / 3600;
    int quantidade_Minutos = (segundos_totais % 3600) / 60;
    int quantidade_Segundos = segundos_totais % 60;

    cout << quantidade_Horas << ":" << quantidade_Minutos << ":" << quantidade_Segundos << endl;
}