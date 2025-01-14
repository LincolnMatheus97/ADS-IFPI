#include <stdio.h>
#include "hardware/gpio.h"
#include "pico/time.h"

#define LED_G 11
#define LED_R 13
#define LED_B 12
#define BT_A 05
#define BT_B 06

int main() {
    //Inicializa o pino de LED e configura como saida
    gpio_init(LED_G);
    gpio_set_dir(LED_G, true);
    gpio_init(LED_R);
    gpio_set_dir(LED_R, true);
    gpio_init(LED_B);
    gpio_set_dir(LED_B, true);

    //Inicializa o pino de botao e configura como entrada
    gpio_init(BT_A);
    gpio_pull_up(BT_A);
    gpio_set_dir(BT_A, false);
    gpio_init(BT_B);
    gpio_pull_up(BT_B);
    gpio_set_dir(BT_B, false);

    //Loop infinito para verificar o estado do botao e controlar o LED
    while (true) {
        if (gpio_get(BT_A) == 0) {
            //Acende o led enquanto o botao estiver pressionado
            gpio_put(LED_G, 1);
            gpio_put(LED_B, 0);
            sleep_ms(20); //Delay para evitar debounce
        } else if (gpio_get(BT_B) == 0) {
            //Acende o led enquanto o botao estiver pressionado
            gpio_put(LED_R, 1);
            gpio_put(LED_B, 0);
            sleep_ms(20); //Delay para evitar debounce
        } else {
            //Apaga o led quando o botao for solto
            gpio_put(LED_G, 0);
            gpio_put(LED_R, 0);
        }
        //Apaga o led quando o botao for solto
        gpio_put(LED_B, 1);
    }
}