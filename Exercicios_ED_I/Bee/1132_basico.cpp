#include <stdio.h>
#include <iostream>
using namespace std;

main() {
    int i, j, somatorio = 0;
    cin >> i >> j;
    int menor = min(i, j);
    int maior = max(i, j);

    while (menor <= maior) {
        if(menor % 13 != 0) {
            somatorio += menor;
        }
        menor++;
    }
    cout << somatorio << endl;
}