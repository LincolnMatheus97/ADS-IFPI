#include <stdio.h>
#include "hardware/gpio.h"
#include "pico/time.h"

#define LED_R 13
#define BT_A 5
#define PISCAR_MS 500

int main() {
    // Inicializa o GPIO do LED como saída
    gpio_init(LED_R);
    gpio_set_dir(LED_R, true);
    // Inicializa o GPIO do botão como entrada
    gpio_init(BT_A);
    gpio_pull_up(BT_A);
    gpio_set_dir(BT_A, false);

    int contador = 0;

    while (true) {
        // Verifica se o botão foi acionado
        bool botaoAcionado = (gpio_get(BT_A) == 0);
        // Se o botão foi acionado, incrementa o contador
        if (botaoAcionado) {
            sleep_ms(50); // Debounce
            if (gpio_get(BT_A) == 0) { // Verifica se o botão ainda está acionado
                contador++;
                while (gpio_get(BT_A) == 0); // Aguarda o botão ser solto
            }
        }
        // Se o contador atingir 5
        if (contador >= 5) {
            for (int i = 0; i < 4; i++) { // Pisca o LED 4 vezes num ciclos de 500ms
                gpio_put(LED_R, 1);
                sleep_ms(PISCAR_MS);
                gpio_put(LED_R, 0);
                sleep_ms(PISCAR_MS);
            }
            contador = 0;
        }
    }
    return 0;
}