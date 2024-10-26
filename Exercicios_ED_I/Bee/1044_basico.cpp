#include <stdio.h>
#include <iostream>
using namespace std;

main() {
    int a, b;
    cin >> a >> b;

    if(b % a == 0 || a % b == 0) {
        cout << "Sao Multiplos" << endl;
    } else {
        cout << "Nao sao Multiplos" << endl;
    }
}