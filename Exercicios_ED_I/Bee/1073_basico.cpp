#include <stdio.h>
#include <iostream>
#include <cmath>
using namespace std;

main() {
    int n;
    cin >> n;
    int i = 1;

    while (i <= n) {
        if (i % 2 == 0) {
            int ao_Quadrado = pow(i, 2);
            cout << i << "^2 = " << ao_Quadrado << endl;
        }
        i++;
    }
}