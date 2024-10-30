#include <stdio.h>
#include <iostream>
using namespace std;

main() {
    int a, n, soma = 0;

    while (cin >> a) {
        cin >> n;
        while(n <= 0) {
            cin >> n;
        }
        int i = 0;
        while (i < n) {
            soma += (a + i);
            i++;
        }
        cout << soma << endl;
        soma = 0;
    }
}