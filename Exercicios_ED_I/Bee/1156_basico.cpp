#include <stdio.h>
#include <iostream>
using namespace std;

main() {
    int i = 1, n = 1; 
    double s = 0;
    while (n <= 39) {
        s += n / static_cast<double>(i);
        i *= 2;
        n += 2;
    }
    printf("%.2lf\n", s);
}