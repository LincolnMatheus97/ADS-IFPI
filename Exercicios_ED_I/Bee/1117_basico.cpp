#include <stdio.h>
#include <iostream>
using namespace std;

main() {
    double n1 = 0.0;
    cin >> n1;

    while (n1 < 0.0 || n1 > 10.0) {
        cout << "nota invalida" << endl;
        cin >> n1;
    }

    double n2 = 0.0;
    cin >> n2;

    while (n2 < 0.0 || n2 > 10.0) {
        cout << "nota invalida" << endl;
        cin >> n2;
    }

    double media = (n1 + n2) / 2.0;
    printf("media = %.2lf\n", media);
}