#include <stdio.h>
#include "hardware/gpio.h"
#include "pico/time.h"

#define LED_R 13
#define BT_A 5
#define BT_B 6

int main() {
    // Inicializa os pinos de LED como saída
    gpio_init(LED_R);
    gpio_set_dir(LED_R, true);

    // Inicializa os pinos de botão como entrada
    gpio_init(BT_A);
    gpio_pull_up(BT_A);
    gpio_set_dir(BT_A, false);
    gpio_init(BT_B);
    gpio_pull_up(BT_B);
    gpio_set_dir(BT_B, false);

    while (true) {
        bool bt_a_Acionado = (gpio_get(BT_A) == 0);
        bool bt_b_Acionado = (gpio_get(BT_B) == 0);
        // Acende o LED quando os botões A ou B estiverem pressionados
        if (bt_a_Acionado || bt_b_Acionado) {
            gpio_put(LED_R, 1);
        } else {
            // Apaga o LED quando os botões A e B não estiverem pressionados
            gpio_put(LED_R, 0);
        }
    }
    return 0;
}