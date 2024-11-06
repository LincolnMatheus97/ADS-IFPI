#include <stdio.h>
#include <iostream>
using namespace std;

main() {
    int i = 0, n;
    cin >> n;
    cin.ignore();

    while (i < n) {
        int j, k, somatorio = 0;
        cin >> j;
        for (k = 0; k < j; k++) {
            if(k % 2 == 0) {
                somatorio++;
            } else {
                somatorio--;
            }
        }
        cout << somatorio << endl;
        i++;
    }
}