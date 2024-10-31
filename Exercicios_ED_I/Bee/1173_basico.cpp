#include <stdio.h>
#include <iostream>
#include <vector>
using namespace std;

main() {
    int i, j;
    cin >> j;
    vector<int> numeros;

    for (i = 0; i < 10; i++) {
        numeros.push_back(j);
        j *= 2;
    }

    for (size_t i = 0; i < numeros.size(); i++) {
        cout << "N[" << i << "] = " << numeros[i] << endl;
    }
}