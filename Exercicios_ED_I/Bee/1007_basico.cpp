#include <stdio.h>
#include <iostream>
using namespace std;

int main() {
    int a, b, c, d;

    scanf("%d", &a);
    scanf("%d", &b);
    scanf("%d", &c);
    scanf("%d", &d);

    int diferenca = (a * b) - (c * d);
    cout << "DIFERENCA = " << diferenca <<endl;
    return 0;
}