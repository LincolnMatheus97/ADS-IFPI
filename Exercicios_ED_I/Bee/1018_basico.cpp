#include <stdio.h>
#include <iostream>
using namespace std;

main() {
    int valor;
    cin >> valor;

    if (valor > 0 && valor < 1000000) {
        int quantidade_100 = valor / 100;
        int quantidade_50 = (valor % 100) / 50;
        int quantidade_20 = ((valor % 100) % 50) / 20;
        int quantidade_10 = ((valor % 50) % 20) / 10;
        int quantidade_5 = ((valor % 20) % 10) / 5;
        int quantidade_2 = ((valor % 10) % 5) / 2;
        int quantidade_1 = (valor % 5) % 2;

        cout << valor << endl;
        cout << quantidade_100 << " nota(s) de R$ 100,00" << endl;
        cout << quantidade_50 << " nota(s) de R$ 50,00" << endl;
        cout << quantidade_20 << " nota(s) de R$ 20,00" << endl;
        cout << quantidade_10 << " nota(s) de R$ 10,00" << endl;
        cout << quantidade_5 << " nota(s) de R$ 5,00" << endl;
        cout << quantidade_2 << " nota(s) de R$ 2,00" << endl;
        cout << quantidade_1 << " nota(s) de R$ 1,00" << endl;
    }
}   