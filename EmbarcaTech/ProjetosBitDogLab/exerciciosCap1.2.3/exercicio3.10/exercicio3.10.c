#include <stdio.h>
#include <stdlib.h>
#include "hardware/gpio.h"
#include "pico/time.h"

#define LED_G 11
#define LED_R 13
#define LED_B 12
#define BT_A 5

void ligarLed(int led) {
    if (led == LED_G) {
        gpio_put(LED_G, 1);
        sleep_ms(500);
        gpio_put(LED_G, 0);
    } else if (led == LED_R) {
        gpio_put(LED_R, 1);
        sleep_ms(500);
        gpio_put(LED_R, 0);
    } else if (led == LED_B) {
        gpio_put(LED_B, 1);
        sleep_ms(500);
        gpio_put(LED_B, 0);
    }
}

int main() {
    // Inicializa os pinos de LED como saída
    gpio_init(LED_G);
    gpio_init(LED_R);
    gpio_init(LED_B);
    gpio_set_dir(LED_G, true);
    gpio_set_dir(LED_R, true);
    gpio_set_dir(LED_B, true);

    // Inicializa o pino do botão como entrada
    gpio_init(BT_A);
    gpio_pull_up(BT_A);
    gpio_set_dir(BT_A, false);

    while (true) {
        bool bt_A_Acionado = (gpio_get(BT_A) == 0);
        int ledAnterior = 0;
        if (bt_A_Acionado) {
            // Sorteia um LED para acender e acende
            int led = rand() % 3 + 11;
            // Evita que o mesmo LED seja sorteado duas vezes seguidas
            while (led == ledAnterior) {
                led = rand() % 3 + 11;
            }
            ligarLed(led);
            ledAnterior = led;
        } 
    }
    return 0;
}