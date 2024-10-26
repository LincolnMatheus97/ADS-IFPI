#include <stdio.h>
#include <iostream>
using namespace std;

main() {
    int a, b, c;
    cin >> a >> b >> c;

    int menor_AB = min(a, b);
    int menor_AC = min(a, c);
    int menor_BC = min(b, c);

    if(a == menor_AB && a == menor_AC) {
        cout << a << endl;
        if (b == menor_BC) {
            cout << b << endl;
            cout << c << endl;
        } else {
            cout << c << endl;
            cout << b << endl;
        }
    } else if (b == menor_AB && b == menor_BC) {
        cout << b << endl;
        if (c == menor_AC) {
            cout << c << endl;
            cout << a << endl;
        } else {
            cout << a << endl;
            cout << c << endl;
        }
    } else if(c == menor_AC && c == menor_BC){
        cout << menor_AC << endl;
        if (b == menor_AB) {
            cout << b << endl;
            cout << a << endl;
        } else {
            cout << a << endl;
            cout << b << endl;
        }
    }
    cout << endl;
    cout << a << endl;
    cout << b << endl;
    cout << c << endl;
}