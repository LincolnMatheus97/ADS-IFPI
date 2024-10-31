#include <stdio.h>
#include <iostream>
using namespace std;

main() {
    int casos, i = 0;
    cin >> casos;

    while (i < casos) {
        int n, somatorio = 0;
        int k = 0, j = 1;
        cin >> n;

        while (k < n - 1) {
            if(n % j == 0) {
                somatorio += j;
            }
            j++;
            k++;
        }
        if (somatorio == n) {
            cout << n << " eh perfeito" << endl;
        } else {
            cout << n << " nao eh perfeito" << endl;
        }
        i++;
    }
}