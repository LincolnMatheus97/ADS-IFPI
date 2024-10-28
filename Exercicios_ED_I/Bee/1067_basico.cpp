#include <stdio.h>
#include <iostream>
using namespace std;

main() {
    int numero, i = 1;
    cin >> numero;

    while(i <= numero) {
        if (i % 2 != 0) {
            cout << i << endl;
        }
        i++;
    }
}