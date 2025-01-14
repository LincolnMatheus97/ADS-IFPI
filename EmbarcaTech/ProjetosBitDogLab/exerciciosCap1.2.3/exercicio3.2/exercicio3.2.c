#include <stdio.h>
#include "hardware/gpio.h"
#include "pico/time.h"

#define LED_RED 13
#define BT_A 5
#define BT_B 6

int main() {
    // Inicializa o led vermelho como saída
    gpio_init(LED_RED);
    gpio_set_dir(LED_RED, true);

    // Inicializa os botões como entrada
    gpio_init(BT_A);
    gpio_set_dir(BT_A, false);
    gpio_pull_up(BT_A);
    gpio_init(BT_B);
    gpio_set_dir(BT_B, false);
    gpio_pull_up(BT_B);

    while (true) {
        // Se o botão A for pressionado, acende o led vermelho
        if (gpio_get(BT_A) == 0) {
            gpio_put(LED_RED, 1);
        // Se o botão B for pressionado, apaga o led vermelho
        } else if (gpio_get(BT_B) == 0) {
            gpio_put(LED_RED, 0);
        }
        sleep_ms(100); // Aguarda o botão ser solto para evitar bounce
    }
    return 0;
}