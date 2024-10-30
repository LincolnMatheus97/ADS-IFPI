#include <stdio.h>
#include <iostream>
#include <string>
#include <cmath>
using namespace std;

main() {
    int caso, i = 1;
    cin >> caso;

    while (i <= caso) {
        string ordem;
        int m = 1;
        while (m <= 3) {
            int j = powf(i, m);
            if (m == 3) {
                ordem += to_string(j);
            } else {
                ordem += to_string(j) + " ";
            }
            m++;
        }
        cout << ordem << endl;
        i++;
    }
}