#include <stdio.h>
#include <iostream>
using namespace std;

main() {
    int i = 1, j = 7;

    while (i <= 9) {
        while (j >= 5) {
            cout << "I=" << i << " J=" << j << endl;
            j--;
        }
        i += 2;
        j = 7;
    }
}