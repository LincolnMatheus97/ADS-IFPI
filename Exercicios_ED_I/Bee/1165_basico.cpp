#include <stdio.h>
#include <iostream>
using namespace std;

int eh_Primo(int num) {
    if (num <= 1) {
        return 0;
    } else if (num <= 3) {
        return 1;
    }

    if (num % 2 == 0 || num % 3 == 0) {
        return 0;
    }

    int divisor = 5;
    while (divisor * divisor <= num) {
        if (num % divisor == 0 || num % (divisor + 2) == 0) {
            return 0;
        }
        divisor += 6;
    }
    
    return 1;
}

main() {
    int casos, i = 0;
    cin >> casos;

    while (i < casos) {
        int n;
        cin >> n;

        int primo = eh_Primo(n);
        if (primo) {
            cout << n << " eh primo" << endl;
        } else {
            cout << n << " nao eh primo" << endl;
        }
        i++;
    }
}