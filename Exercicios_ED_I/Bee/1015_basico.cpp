#include <stdio.h>
#include <iostream>
#include <cmath>
using namespace std;

main() {
    double x1, y1, x2, y2;
    cin >> x1 >> y1;
    cin >> x2 >> y2;

    double p1 = (x2 - x1) * (x2 - x1);
    double p2 = (y2 - y1) * (y2 - y1);

    double distancia = sqrt(p1 + p2);
    printf("%.4lf\n", distancia);
}