#include <stdio.h>
#include <iostream>
using namespace std;

main() {
    int casos, i = 0;
    cin >> casos;

    while (i < casos) {
        int x = 0, y = 0;
        cin >> x >> y;

        if (y == 0) {
            cout << "divisao impossivel" << endl;
        } else {
            double divisao = x / static_cast<double>(y);
            printf("%.1lf\n", divisao);
        }
        i++;
    }
}