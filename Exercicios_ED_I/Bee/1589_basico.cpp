#include <stdio.h>
#include <iostream>
using namespace std;

main() {
    int i = 0, j;
    cin >> j;

    while (i < j) {
        int r1, r2;
        cin >> r1 >> r2;
        int soma = r1 + r2;
        cout << soma << endl;
        i++;
    }
}