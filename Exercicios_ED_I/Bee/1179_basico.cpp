#include <stdio.h>
#include <iostream>
#include <vector>
using namespace std;

main() {
    int i;
    size_t k;
    vector<int> pares, impares;

    for (i = 0; i < 15; i++) {
        int n;
        cin >> n;

        if (n % 2 != 0) {
            impares.push_back(n);
            if (impares.size() == 5) {
                for (k = 0; k < impares.size(); k++) {
                   cout << "impar[" << k << "] = " << impares[k] << endl; 
                }
                impares.clear();
            } 
        } else {
            pares.push_back(n);
            if (pares.size() == 5) {
                for (k = 0; k < pares.size(); k++) {
                   cout << "par[" << k << "] = " << pares[k] << endl; 
                }
                pares.clear();
            } 
        }
    }

    for (k = 0; k < impares.size(); k++) {
        cout << "impar[" << k << "] = " << impares[k] << endl; 
    }

    for (k = 0; k < pares.size(); k++) {
        cout << "par[" << k << "] = " << pares[k] << endl; 
    }
}