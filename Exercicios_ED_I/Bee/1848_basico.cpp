#include <stdio.h>
#include <iostream>
#include <string>
using namespace std;

main() {
    int i = 0, somatorio = 0;
    string entrada;

    while (i < 3) {
        getline(cin, entrada);

        if (entrada == "caw caw") {
            cout << somatorio << endl;
            somatorio = 0;
            i++;
        } else if (entrada == "--*") {
            somatorio += 1;
        } else if (entrada == "-*-") {
            somatorio += 2;
        } else if (entrada == "*--") {
            somatorio += 4;
        } else if (entrada == "**-") {
            somatorio += 6;
        } else if (entrada == "***") {
            somatorio += 7;
        } else if (entrada == "-**") {
            somatorio += 3;
        } else if (entrada == "*-*") {
            somatorio += 5;
        }
    }
}