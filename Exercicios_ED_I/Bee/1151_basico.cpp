#include <stdio.h>
#include <iostream>
#include <string>
using namespace std;

main() {
    int i0 = 0, i1 = 1, soma = 0, i = 2, casos;
    string fibo = "0 1";
    cin >> casos;

    while (i < casos) {
        soma = i0 + i1;
        fibo +=  " " + to_string(soma);
        i0 = i1;
        i1 = soma;
        i++;
    }
    cout << fibo << endl;
}