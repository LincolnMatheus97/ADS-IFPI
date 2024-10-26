#include <stdio.h>
#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    double pi = 3.14159;
    double raio;

    scanf("%lf", &raio);

    double area = pi * (raio * raio);

    cout << fixed << setprecision(4);
    cout << "A=" << area << endl;
    return 0;
}