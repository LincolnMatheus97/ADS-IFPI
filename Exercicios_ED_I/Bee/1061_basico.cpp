#include <stdio.h>
#include <iostream>
using namespace std;

main() {    
    int dia_Inicio, hora_Inicio, minuto_Inicio, segundo_Inicio; 
    int dia_Final, hora_Final, minuto_Final, segundo_Final;
    
    scanf("Dia %d", &dia_Inicio);
    scanf("%d : %d : %d\n", &hora_Inicio, &minuto_Inicio, &segundo_Inicio);
    scanf("Dia %d", &dia_Final);
    scanf("%d : %d : %d", &hora_Final, &minuto_Final, &segundo_Final);

    int totalSegundos_Inicio = segundo_Inicio + (minuto_Inicio * 60) + (hora_Inicio * 3600) + (dia_Inicio * 86400);
    int totalSegundos_Final = segundo_Final + (minuto_Final * 60) + (hora_Final * 3600) + (dia_Final * 86400);

    int tempo_Eventos_Segundos = totalSegundos_Final - totalSegundos_Inicio;

    int dia_Evento = tempo_Eventos_Segundos / 86400;
    tempo_Eventos_Segundos %= 86400;
    int hora_Evento = tempo_Eventos_Segundos / 3600;
    tempo_Eventos_Segundos %= 3600;
    int minuto_Evento = tempo_Eventos_Segundos / 60;
    int segundo_Evento = tempo_Eventos_Segundos % 60;

    cout << dia_Evento << " dia(s)" << endl;
    cout << hora_Evento << " hora(s)" << endl;
    cout << minuto_Evento << " minuto(s)" << endl;
    cout << segundo_Evento << " segundo(s)" << endl;
}