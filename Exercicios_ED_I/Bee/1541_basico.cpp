#include <stdio.h>
#include <iostream>
#include <math.h>
using namespace std;

main() {
    int a, b, c;
    cin >> a >> b >> c;

    while (a != 0) {
        int area_total = a * b;
        double area_Max_total = area_total / static_cast<double>(c);
        int lado = 10 * sqrt(area_Max_total);

        cout << lado << endl;
        cin >> a >> b >> c;
    }
}