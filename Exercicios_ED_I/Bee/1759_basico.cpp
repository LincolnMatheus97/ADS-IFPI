#include <stdio.h>
#include <iostream>
#include <string>
using namespace std;

main() {
    int n, i = 1;
    string frase;
    cin >> n;
    while (i <= n) {
        if (i == n) {
            frase += "Ho!";
        } else {
            frase += "Ho ";
        }
        i++;
    }
    cout << frase << endl;
}