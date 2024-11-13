#include <stdio.h>
#include <iostream>
using namespace std;

main() {
    int casos, n = 0;
    cin >> casos;

    while (n < casos) {
        int ano;
        cin >> ano;
        if (ano < 2015) {
            int anoTranscorrido = abs(ano - 2015);
            cout << anoTranscorrido << " D.C." << endl; 
        } else if (ano >= 2015) {
            int anoTranscorrido = ano - 2015 + 1;
            cout << anoTranscorrido << " A.C." << endl; 
        }
        n++;
    }
}