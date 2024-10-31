#include <stdio.h>
#include <iostream>
using namespace std;

main() {
    int k, i, j = 0;
    cin >> k;

    for (i = 0; i < 1000; i++) {
        if (j == k) {
            j = 0;
        }
        printf("N[%d] = %d\n", i, j);
        j++;
    }
}