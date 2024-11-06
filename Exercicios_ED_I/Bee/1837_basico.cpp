#include <stdio.h>
#include <iostream>
#include <math.h>
using namespace std;

main() {
    int a, b;
    cin >> a >> b;

    int resto, quociente;

    if (b < 0) {
        b = b * -1;
        quociente = floor(a / static_cast<double>(b));
        quociente = quociente * -1;
        b = b * -1;
        resto = a - ((b) * quociente); 
    } else {
        quociente = floor(a / static_cast<double>(b));
        resto = a - ((b) * quociente); 
    }

    cout << quociente << " " << resto << endl;
}