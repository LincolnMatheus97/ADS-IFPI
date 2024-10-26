#include <stdio.h>
#include <iostream>
using namespace std;

main() {
    int pares = 1;

    while(pares <= 100) {
        if (pares % 2 == 0) {
            cout << pares << endl;
        }
        pares++;
    }
}