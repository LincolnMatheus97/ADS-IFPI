#include <stdio.h>
#include <iostream>
using namespace std;

main() {
    int i;
    double j;
    cin >> j;

    for (i = 0; i < 100; i++) {
        printf("N[%d] = %.4lf\n", i, j);
        j /= 2.0;
    }
}