#include <stdio.h>
#include <iostream>
using namespace std;

main() {
    double i = 0.0, j = 1.0;

    while (i <= 2.0) {
        int m  = 0;
        double jj = j;
        while (m < 3) {
            cout << "I=" << i << " J=" << jj << endl;
            jj += 1.0;
            m++;
        }
        i += 0.2;
        j += 0.2;
    }
}