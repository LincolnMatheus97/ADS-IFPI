#include <stdio.h>
#include "hardware/gpio.h"
#include "pico/time.h"

// Definindo os pinos e os tempos de duração dos sinais
#define LED_B 12
#define PONTO_TIME 250
#define TRACO_TIME 1000
#define ESPACO_TIME 200
#define DELAY_LED_MS 2000

// Funções para acender o led B de acordo com o sinal de ponto
void sinalPonto(int led_B) {
    gpio_put(led_B, 1);
    sleep_ms(PONTO_TIME);
    gpio_put(led_B, 0);
    sleep_ms(ESPACO_TIME);
}

// Funções para acender o led B de acordo com o sinal de traço
void sinalTraco(int led_B) {
    gpio_put(led_B, 1);
    sleep_ms(TRACO_TIME);
    gpio_put(led_B, 0);
    sleep_ms(ESPACO_TIME);
}

int main() {
    // Inicializando o led B como saída
    gpio_init(LED_B);
    gpio_set_dir(LED_B, true);

    while (true) {
        for(int i = 0; i < 3; i++) {
            sinalPonto(LED_B);
        }

        for (int i = 0; i < 3; i++) {
            sinalTraco(LED_B);
        }

        for (int i = 0; i < 3; i++) {
            sinalPonto(LED_B);
        }

        sleep_ms(DELAY_LED_MS);
    }
    return 0;
}