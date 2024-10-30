#include <stdio.h>
#include <iostream>
using namespace std;

main() {
    int idade, somatorio = 0, pessoas = 0;
    cin >> idade;

    while (idade > 0) {
        somatorio += idade;
        pessoas++;

        cin >> idade;
    }

    double media = somatorio / static_cast<double>(pessoas);
    printf("%.2lf\n", media);
}