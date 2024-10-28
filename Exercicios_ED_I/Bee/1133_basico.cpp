#include <stdio.h>
#include <iostream>
using namespace std;

main() {
    int x, y;
    cin >> x >> y;
    int menor = min(x, y);
    int maior = max(x, y);
    
    if (menor % 5 == 2 || menor % 5 == 3) {
        menor += 1;
    }

    while (menor < maior) {
        if(menor % 5 == 2 || menor % 5 == 3) {
            cout << menor << endl;
        }
        menor++;
    }
}