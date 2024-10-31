#include <stdio.h>
#include <iostream>
using namespace std;

main() {
    int x;
    cin >> x;

    while (x != 0) {
        int k = x, j = 0;
        int somatorio = 0;
        while (j < 5) {
            if (k % 2 == 0) {
                somatorio += k;
                k++;
                j++;
            } else {
                k++;
            }
        }
        cout << somatorio << endl;
        cin >> x;
    }
}