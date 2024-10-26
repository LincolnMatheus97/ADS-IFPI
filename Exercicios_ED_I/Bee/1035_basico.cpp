#include <stdio.h>
#include <iostream>
using namespace std;

main() {
    int a, b, c, d;
    cin >> a >> b >> c >> d;
    int auxiliar = 0;

    if ((b > c && d > a) && (c + d > a + b) && (c > 0 && b > 0) && (a % 2 == 0)) {
        auxiliar = 1;
    }

    if(auxiliar) {
        cout << "Valores aceitos" << endl;
    } else {
        cout << "Valores nao aceitos" << endl;
    }
}