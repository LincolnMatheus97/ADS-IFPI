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
        string ordem_2;
        int m = 1;
        while (m <= 3) {
            int j = i;
            if (m == 3) {
                j = i * i * i;
                ordem += to_string(j);
                ordem_2 += to_string(j + 1);
            } else if (m == 2){
                j = i * i;
                ordem += to_string(j) + " ";
                ordem_2 += to_string(j + 1) + " ";
            } else {
                ordem += to_string(j) + " ";
                ordem_2 += to_string(i) + " ";
            }
            m++;
        }
        cout << ordem << endl;
        cout << ordem_2 << endl;
        i++;
    }
}