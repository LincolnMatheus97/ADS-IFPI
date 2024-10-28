#include <stdio.h>
#include <iostream>
using namespace std;

main() {
    int n, i = 1;
    cin >> n;

    while (i < 10000) {
        if (i % n == 2) {
            cout << i << endl;
        }
        i++;
    }
}