#include <stdio.h>
#include <stdlib.h>
#include "hardware/gpio.h"
#include "pico/time.h"

#define LED_G 11
#define LED_R 13
#define LED_B 12

void ledRandomico() {
    int led = rand() % 3;
    if (led == 0) {
        gpio_put(LED_G, 1);
        sleep_ms(1000);
        gpio_put(LED_G, 0);
        sleep_ms(500);
    } else if (led == 1) {
        gpio_put(LED_R, 1);
        sleep_ms(1000);
        gpio_put(LED_R, 0);
        sleep_ms(500);
    } else {
        gpio_put(LED_B, 1);
        sleep_ms(1000);
        gpio_put(LED_B, 0);
        sleep_ms(500);
    }
}

int main() {
    // Inicializa a GPIO 11, 13 e 12 como saída
    gpio_init(LED_G);
    gpio_init(LED_R);
    gpio_init(LED_B);
    gpio_set_dir(LED_G, true);
    gpio_set_dir(LED_R, true);
    gpio_set_dir(LED_B, true);

    while (true) {
        ledRandomico();
    }
    return 0;
}