#include <stdio.h>
#include <iostream>
#include <string>
using namespace std;

main() {
    int a, b, somatorio = 0;
    string ordem;
    cin >> a >> b;

    while (a > 0 && b > 0) {
        int menor = min(a, b);
        int maior = max(a, b);

        while (menor <= maior) {
            somatorio += menor;
            ordem += to_string(menor) + " ";
            menor++;
        }
        cout << ordem << "Sum=" << somatorio << endl;
        ordem = "";
        somatorio = 0;
        cin >> a >> b;
    }
}