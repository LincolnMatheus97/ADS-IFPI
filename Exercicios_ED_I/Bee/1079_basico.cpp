#include <stdio.h>
#include <iostream>
using namespace std;

main() {
    int n, i = 0;
    cin >> n;

    while (i < n) {
        double n1, n2, n3;
        cin >> n1 >> n2 >> n3;

        double media = ((n1 * 2) + (n2 * 3) + (n3 * 5)) / 10;
        printf("%.1lf\n", media);
        i++;
    }
}