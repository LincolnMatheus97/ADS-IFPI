#include <stdio.h>
#include <iostream>
using namespace std;

main() {
    int i = 0, n;
    cin >> n;
    cin.ignore();

    while (i < n) {
        string entrada;
        int power;
        cin >> entrada >> power;

        if (entrada == "Thor") {
            cout << "Y" << endl;
        } else {
            cout << "N" << endl;
        }
        i++;
    }
}