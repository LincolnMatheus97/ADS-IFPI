#include <stdio.h>
#include <iostream>
using namespace std;

main() {
    int n;

    while (scanf("%d", &n) != EOF) {
        if (n == 0) {
            cout << "vai ter copa!" << endl;
        } else {
            cout << "vai ter duas!" << endl;
        }
    }
}