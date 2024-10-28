#include <stdio.h>
#include <iostream>
using namespace std;

main() {
    int i = 1, j = 7;

    while (i <= 9) {
        int m = 0, jj = j;
        while (m < 3) {
            cout << "I=" << i << " J=" << jj << endl;
            jj--;
            m++;
        }
        i += 2;
        j += 2;

    }
}