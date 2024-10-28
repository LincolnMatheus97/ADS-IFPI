#include <stdio.h>
#include <iostream>
using namespace std;

main() {
    int numero, i = 0;
    cin >> numero;
    while(i < 6) {
        if (numero % 2 != 0) {
            cout << numero << endl;
            i++;
        }
        numero++;
    }
}