#include <stdio.h>
#include <iostream>
using namespace std;

main() {
    int i = 1, j = 60;

    while (j >= 0) {
        cout << "I=" << i << " J=" << j << endl;
        j -= 5;
        i += 3;
    }
}