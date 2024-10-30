#include <stdio.h>
#include <iostream>
using namespace std;

main() {
    int n, fatorial = 1, i = 0;
    cin >> n;

    while (i < n) {
        fatorial *= (n - i);
        i++;
    }
    cout << fatorial << endl;
}