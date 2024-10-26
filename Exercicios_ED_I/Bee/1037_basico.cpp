#include <stdio.h>
#include <iostream>
using namespace std;

main() {
    double a;
    cin >> a;

    if (a >= 0.0 && a <= 25.00) {
        cout << "Intervalo [0,25]" << endl;
    } else if (a > 25.00 && a <= 50.00) {
        cout << "Intervalo (25,50]" << endl;
    } else if (a > 50.00 && a <= 75.00) {
        cout << "Intervalo (50,75]" << endl;
    } else if (a > 75.00 && a <= 100.00) {
        cout << "Intervalo (75,100]" << endl;
    } else {
        cout << "Fora de intervalo" << endl;
    }
}