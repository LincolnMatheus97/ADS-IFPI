#include <stdio.h>
#include <iostream>
#include <vector>
using namespace std;

main() {
    int i;
    vector<int> numeros;

    for (i = 0; i < 20; i++) {
        int j;
        cin >> j;
        numeros.push_back(j);
    }

    for (size_t i = 0; i < numeros.size(); i++) {
        printf("N[%d] = %d\n", i, numeros[numeros.size() - 1 - i]);
    }
}