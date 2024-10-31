#include <stdio.h>
#include <iostream>
#include <vector>
using namespace std;

main() {
    int i;
    vector<int> numeros;

    for (i = 0; i < 10; i++) {
        int n;
        cin >> n;

        if (n <= 0) {
            n = 1;
        } 
        numeros.push_back(n);
    }

    for (i = 0; i < numeros.size(); i++) {
        cout << "X[" << i << "] = " << numeros[i] << endl;
    }
}