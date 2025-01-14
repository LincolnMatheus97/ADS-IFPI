#include <stdio.h>
#include "hardware/gpio.h"
#include "pico/time.h"

#define LED_RED 13
#define BT_A 5
#define LED_ON_DELAY_MS 500
#define LED_OFF_DELAY_MS 500

int main() {
    // Inicializa o GPIO do LED como saída
    gpio_init(LED_RED);
    gpio_set_dir(LED_RED, true);

    // Inicializa o GPIO do botão como entrada
    gpio_init(BT_A);
    gpio_pull_up(BT_A);
    gpio_set_dir(BT_A, false);

    while(true) {
        // Se o botão estiver pressionado, pisca o LED vermelho a cada 1 segundo (500ms ligado, 500ms desligado)
        if(gpio_get(BT_A) == 0) {
            gpio_put(LED_RED, 1);
            sleep_ms(LED_ON_DELAY_MS);
            gpio_put(LED_RED, 0);
            sleep_ms(LED_OFF_DELAY_MS);
        // Se o botão não estiver pressionado, mantém o LED vermelho desligado
        } else {
            gpio_put(LED_RED, 0);
        }
    }

    return 0;
}