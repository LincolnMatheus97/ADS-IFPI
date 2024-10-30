#include <stdio.h>
#include <iostream>
using namespace std;

main() {
    int i = 1;
    double s = 0.0;

    while (i <= 100) {
        s += 1 / static_cast<double>(i);
        i++;
    }

    printf("%.2lf\n", s);
}