#include <stdio.h>
#include <iostream>
using namespace std;

main() {
    int n, i = 1;
    cin >> n;

    while (i <= 10) {
        int resultado = i * n;
        cout << i << " x " << n << " = " << resultado << endl;
        i++;
    }
}