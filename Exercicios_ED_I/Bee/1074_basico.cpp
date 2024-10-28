#include <stdio.h>
#include <iostream>
using namespace std;

main() {
    int n, i = 0;
    cin >> n;

    while (i < n) {
        int numero;
        cin >> numero;

        if (numero == 0) {
            cout << "NULL" << endl;
        } else if (numero % 2 == 0) {
            if (numero > 0) {
                cout << "EVEN POSITIVE" << endl;
            } else {
                cout << "EVEN NEGATIVE" << endl;
            }
        } else {
            if (numero > 0) {
                cout << "ODD POSITIVE" << endl;
            } else {
                cout << "ODD NEGATIVE" << endl;
            }
        }
        i++;
    }
}