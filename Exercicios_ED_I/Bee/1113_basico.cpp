#include <stdio.h>
#include <iostream>
using namespace std;

main() {
    int x, y;
    cin >> x >> y;

    while (x != y) {
        if (x > y) {
            cout << "Decrescente" << endl;
        } else {
            cout << "Crescente" << endl;
        }
        cin >> x >> y;
    }
}