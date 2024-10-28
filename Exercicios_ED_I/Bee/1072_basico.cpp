#include <stdio.h>
#include <iostream>
using namespace std;

main() {
    int out = 0, in = 0, casos, i = 0;
    cin >> casos;

    while (i < casos) {
        int numero;
        cin >> numero;
        if (numero >= 10 && numero <= 20) {
            in++;
        } else {
            out++;
        }
        i++;
    }

    cout << in << " in" << endl;
    cout << out << " out" << endl;
}