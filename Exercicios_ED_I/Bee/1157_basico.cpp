#include <stdio.h>
#include <iostream>
using namespace std;

main() {
    int n, i = 1;
    cin >> n;

    while (i <= n) {
        if (n % i == 0) {
            cout << i << endl;
        }
        i++;
    }
}