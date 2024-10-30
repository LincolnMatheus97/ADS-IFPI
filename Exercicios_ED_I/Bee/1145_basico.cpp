#include <stdio.h>
#include <iostream>
#include <string>
using namespace std;

main() {
    int x, y, i = 1;
    cin >> x >> y;

    while (i <= y) {
        int k = 1, m = i;
        string ordem;
        while (k <= x) {
            if(k == x) {
                ordem += to_string(m);
            } else {
                ordem += to_string(m) + " ";
            }
            k++;
            m++;
        }
        cout << ordem << endl;
        i += x;
    } 
}