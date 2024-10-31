#include <stdio.h>
#include <iostream>
using namespace std;

main() {
    int casos, i = 0;
    cin >> casos;

    while (i < casos) {
        int x, y, j = 0;
        cin >> x >> y;
        int somatorio = 0;

        while (j < y) {
            if (x % 2 != 0) {
                somatorio += x;
                j++;
                x++;
            } else {
                x++;
            }
        }
        cout << somatorio << endl;
        i++;
    }
}