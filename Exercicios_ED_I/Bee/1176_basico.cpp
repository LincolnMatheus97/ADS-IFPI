#include <stdio.h>
#include <iostream>
#include <vector>
using namespace std;

main() {
    int i, j;
    vector<long> numeros = {0, 1};

    for (i = 2; i <= 60; i++) {
        long soma = numeros[i - 1] + numeros[i - 2];
        numeros.push_back(soma);
    }

    cin >> j;

    for (i = 0; i < j; i++) {
        int k;
        cin >> k;
        printf("Fib(%d) = %ld\n", k, numeros[k]);
    }
    
}