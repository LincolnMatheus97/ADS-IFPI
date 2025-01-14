#include <stdio.h>
#include "hardware/gpio.h"
#include "pico/time.h"

#define LED_G 11
#define LED_R 13
#define LED_B 12
#define BT_A 5
#define BT_B 6

void set_Leds(bool led_g, bool led_r, bool led_b) {
    gpio_put(LED_G, led_g);
    gpio_put(LED_R, led_r);
    gpio_put(LED_B, led_b);
}

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
    gpio_set_dir(BT_A, false);
    gpio_pull_up(BT_A);
    gpio_init(BT_B);
    gpio_set_dir(BT_B, false);
    gpio_pull_up(BT_B);

    //Loop infinito para verificar o estado do botao e controlar o LED
    while (true) {
        if (gpio_get(BT_A) == 0 && gpio_get(BT_B) == 0) {
            //Acende o led branco enquanto ambos os botoes estiverem pressionados
            set_Leds(1, 1, 1);
            // sleep_ms(20); //Delay para evitar debounce
        } else if (gpio_get(BT_A) == 0) {
            //Acende o led verde enquanto o botao estiver pressionado
            set_Leds(1, 0, 0);
            // sleep_ms(20); //Delay para evitar debounce
        } else if (gpio_get(BT_B) == 0) {
            //Acende o led vermelho enquanto o botao estiver pressionado
            set_Leds(0, 1, 0);
            // sleep_ms(20); //Delay para evitar debounce
        } else {
            //Acega o led azul enquanto nenhum botao estiver pressionado
            set_Leds(0, 0, 1);
        }
        sleep_ms(100); //Delay para evitar debounce
    }
}