#include <stdio.h>
#include <iostream>
#include <cmath>
using namespace std;

main() {
    double a, b, c;
    cin >> a >> b >> c;

    double delta = (b * b) - (4 * a * c);
    
    if (delta > 0 && a > 0) {
        double raiz_1 = (-b + sqrt(delta)) / (2 * a);
        double raiz_2 = (-b - sqrt(delta)) / (2 * a);

        printf("R1 = %.5lf\n", raiz_1);
        printf("R2 = %.5lf\n", raiz_2);
    } else {
        cout << "Impossivel calcular" << endl;
    }
}