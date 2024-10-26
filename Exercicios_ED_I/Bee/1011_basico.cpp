#include <stdio.h>
#include <iostream>
using namespace std;

main() {
    double raio = 0.0;
    double pi = 3.14159;

    cin >> raio;
    
    double volume = ((4.0 / 3.0) * pi * (raio * raio * raio));

    printf("VOLUME = %.3lf\n", volume);
}