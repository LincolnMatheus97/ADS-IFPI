#include <stdio.h>
#include <iostream>
using namespace std;

main() {
    double valor;
    cin >> valor;

    int valorInt = static_cast<int>(valor * 100 + 0.5);

    int quantidade_100 = valorInt / 10000;
    valorInt %= 10000;
    int quantidade_50 = valorInt / 5000;
    valorInt %= 5000;
    int quantidade_20 = valorInt / 2000;
    valorInt %= 2000;
    int quantidade_10 = valorInt / 1000;
    valorInt %= 1000;
    int quantidade_5 = valorInt / 500;
    valorInt %= 500;
    int quantidade_2 = valorInt / 200;
    valorInt %= 200;
    int quantidade_1 = valorInt / 100;
    valorInt %= 100;
    int quantidade_0_50 = valorInt / 50;
    valorInt %= 50;
    int quantidade_0_25 = valorInt / 25;
    valorInt %= 25;
    int quantidade_0_10 = valorInt / 10;
    valorInt %= 10;
    int quantidade_0_05 = valorInt / 5;
    valorInt %= 5;
    int quantidade_0_01 = valorInt;

    cout << "NOTAS:" << endl;
    cout << quantidade_100 << " nota(s) de R$ 100.00" << endl;
    cout << quantidade_50 << " nota(s) de R$ 50.00" << endl;
    cout << quantidade_20 << " nota(s) de R$ 20.00" << endl;
    cout << quantidade_10 << " nota(s) de R$ 10.00" << endl;
    cout << quantidade_5 << " nota(s) de R$ 5.00" << endl;
    cout << quantidade_2 << " nota(s) de R$ 2.00" << endl;
    cout << "MOEDAS:" << endl;
    cout << quantidade_1 << " moeda(s) de R$ 1.00" << endl;
    cout << quantidade_0_50 << " moeda(s) de R$ 0.50" << endl;
    cout << quantidade_0_25 << " moeda(s) de R$ 0.25" << endl;
    cout << quantidade_0_10 << " moeda(s) de R$ 0.10" << endl;
    cout << quantidade_0_05 << " moeda(s) de R$ 0.05" << endl;
    cout << quantidade_0_01 << " moeda(s) de R$ 0.01" << endl;
}  