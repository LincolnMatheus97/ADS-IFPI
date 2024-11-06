#include <stdio.h>
#include <iostream>
using namespace std;

main() {
    int a, b, c;
    cin >> a >> b >> c;

    if (c - b > b - a || (b - a == c - b && b - a > 0)) {
        cout << ":)" << endl;
    } else {
        cout << ":(" << endl;
    }
}