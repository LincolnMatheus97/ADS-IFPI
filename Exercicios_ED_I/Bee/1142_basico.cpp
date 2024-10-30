#include <stdio.h>
#include <iostream>
#include <string>
using namespace std;

main() {
    int casos, i = 0, m = 1;
    cin >> casos;

    while (i < casos) {
        int mm = m, n = 1;
        string ordem;
        while (n <= 3) {
            ordem += to_string(mm) + " ";
            if (n == 3) {
                ordem += "PUM";
            }
            mm++;
            n++;
        }
        cout << ordem << endl;
        m += 4;
        i++;
    }
}