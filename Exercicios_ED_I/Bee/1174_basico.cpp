#include <stdio.h>
#include <iostream>
using namespace std;

main() {
    int i;

    for (i = 0; i < 100; i++) {
        float n;
        cin >> n;
        if (n <= 10) {
            printf("A[%d] = %.1f\n", i, n);
        }
    }
}