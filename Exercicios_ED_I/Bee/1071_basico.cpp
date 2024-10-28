#include <stdio.h>
#include <iostream>
using namespace std;

main() {
    int x, y;
    cin >> x;
    cin >> y;

    int maxi = max(x, y);
    int mini = min(x, y);
    int somatorio = 0;

    if (maxi % 2 != 0) {
        maxi--;
    }

    while (maxi > mini) {
        if(maxi % 2 != 0) {
            somatorio += maxi;
        }
        maxi--;
    }
    cout << somatorio << endl;

}