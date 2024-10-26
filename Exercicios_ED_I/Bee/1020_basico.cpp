#include <stdio.h>
#include <iostream>
using namespace std;

main() {
    int idade_dias;
    cin >> idade_dias;

    int quantidade_Anos = idade_dias / 365;
    int quantidade_Meses = (idade_dias % 365) / 30;
    int quantidade_Dias = (idade_dias % 365) % 30;

    cout << quantidade_Anos << " ano(s)" << endl;
    cout << quantidade_Meses << " mes(es)" << endl;
    cout << quantidade_Dias << " dia(s)" << endl;
}