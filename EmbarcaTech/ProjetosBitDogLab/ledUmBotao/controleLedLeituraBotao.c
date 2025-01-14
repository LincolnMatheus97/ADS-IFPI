#include <stdio.h>
#include "hardware/gpio.h"
#include "pico/time.h"

#define LED_G 11
#define BT_A 5

int main() {
    //Inicializa o pino de LED e configura como saida
    gpio_init(LED_G);
    gpio_set_dir(LED_G, true);

    //Inicializa o pino de botao e configura como entrada
    gpio_init(BT_A);
    gpio_pull_up(BT_A);
    gpio_set_dir(BT_A, false);

    //Loop infinito para verificar o estado do botao e controlar o LED
    while (true) {
        if (gpio_get(BT_A) == 0) {
            //Acende o led enquanto o botao estiver pressionado
            gpio_put(LED_G, 1);
            sleep_ms(20); //Delay para evitar debounce
        }
        gpio_put(LED_G, 0);
    }
}