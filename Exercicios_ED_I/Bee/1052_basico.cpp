#include <stdio.h>
#include <iostream>
#include <string.h>
using namespace std;

main() {
    int mes_Numerico;
    cin >> mes_Numerico;
    string mes;

    if (mes_Numerico == 1) {
        mes = "January";
    } else if (mes_Numerico == 2) {
        mes = "February";
    } else if (mes_Numerico == 3) {
        mes = "March";
    } else if (mes_Numerico == 4) {
        mes = "April";
    } else if (mes_Numerico == 5) {
        mes = "May";
    } else if (mes_Numerico == 6) {
        mes = "June";
    } else if (mes_Numerico == 7) {
        mes = "July";
    } else if (mes_Numerico == 8) {
        mes = "August";
    } else if (mes_Numerico == 9) {
        mes = "September";
    } else if (mes_Numerico == 10) {
        mes = "October";
    } else if (mes_Numerico == 11) {
        mes = "November";
    } else if (mes_Numerico == 12) {
        mes = "December";
    }
    cout << mes.c_str() << endl;
}