#include <stdio.h>
#include <stdlib.h>
#include "hardware/gpio.h"
#include "pico/time.h"

#define LED_G 11
#define LED_R 13
#define LED_B 12
#define BT_A 5
#define BT_B 6

// Função de callback para a interrupção do botão B
void minhaCallback(uint gpio, uint32_t events) {
    if (gpio == BT_B && events == GPIO_IRQ_EDGE_RISE) {
        gpio_put(LED_G, 0);
        gpio_put(LED_R, 0);
        gpio_put(LED_B, 0);
    }
}

void ligarLed(int *contador) {
    if (*contador == 1) {
        gpio_put(LED_G, 1);
        gpio_put(LED_R, 0);
        gpio_put(LED_B, 0);
    } else if (*contador == 2) {
        gpio_put(LED_G, 0);
        gpio_put(LED_R, 1);
        gpio_put(LED_B, 0);
    } else if (*contador == 3) {
        gpio_put(LED_G, 0);
        gpio_put(LED_R, 0);
        gpio_put(LED_B, 1);
    } else if (*contador == 4) {
        gpio_put(LED_G, 1);
        gpio_put(LED_R, 1);
        gpio_put(LED_B, 0);  
    } else if (*contador == 5) {
        gpio_put(LED_G, 1);
        gpio_put(LED_R, 0);
        gpio_put(LED_B, 1);
    } else if (*contador == 6) {
        gpio_put(LED_G, 0);
        gpio_put(LED_R, 1);
        gpio_put(LED_B, 1);
    } else if (*contador == 7) {
        gpio_put(LED_G, 1);
        gpio_put(LED_R, 1);
        gpio_put(LED_B, 1);
        *contador = 0;
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

    // Inicializa os pinos dos botões como entrada
    gpio_init(BT_A);
    gpio_pull_up(BT_A);
    gpio_set_dir(BT_A, false);
    gpio_init(BT_B);
    gpio_pull_up(BT_B);
    gpio_set_dir(BT_B, false);

    int contador = 0;

    // Configura a interrupção do botão B
    gpio_set_irq_enabled_with_callback(BT_B, GPIO_IRQ_EDGE_RISE, true, &minhaCallback);

    while (true) {
        bool bt_A_Acionado = (gpio_get(BT_A) == 0);
        
        if (bt_A_Acionado) {
            sleep_ms(50); // Debounce
            if (gpio_get(BT_A) == 0) { // Verifica se o botão ainda está pressionado
                contador++;
                ligarLed(&contador);
                while (gpio_get(BT_A) == 0); // Aguarda o botão ser solto
            }
        }
    }
    return 0;
}