#include <stdio.h>
#include <iostream>
using namespace std;

main() {
    int casos = 0;
    cin >> casos;

    while (casos != 0) {
        int a, b;
        cin >> a >> b;

        int menor = min(a, b);
        int maior = max(a, b);
        int somatorio = 0;
        
        if (menor % 2 != 0) {
            menor = menor + 1;
        }

        while (menor < maior) {
            if(menor % 2 != 0) {
                somatorio += menor;
            }
            menor++;
        }
        cout << somatorio <<endl;
        casos--;
    }
}