#include <stdio.h>
#include <iostream>
#include <string>
using namespace std;

main() {
    int x;
    cin >> x;

    while (x != 0) {
        int i = 1;
        string ordem;
        while (i <= x) {
            if (i == x) {
                ordem += to_string(i);
            } else {
                ordem += to_string(i) + " ";
            }
            i++;
        }
        cout << ordem << endl;
        cin >> x;
    }
}