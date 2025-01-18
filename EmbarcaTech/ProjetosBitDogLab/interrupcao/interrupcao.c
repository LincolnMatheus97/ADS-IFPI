#include <stdio.h>
#include "pico/stdlib.h"
#include "hardware/gpio.h"
#include "pico/time.h"

// Define os pinos do led e dos botões
#define LED_PIN 12
#define BT_A 5
#define BT_B 6

// Define a variável que armazena o tempo de piscar do led
int piscarMs = 1000;

// Função de interrupção que é chamada quando o botão é pressionado
void minhaIRQ(uint gpio, uint32_t events) {
    if (gpio == BT_A) {
        if (piscarMs > 100) {
            piscarMs -= 100;
        }
    } else if (gpio == BT_B) {
        if (piscarMs < 1900) {
            piscarMs += 100;
        }
    }
}

int main()
{   
    // Inicializa o led como saída
    gpio_init(LED_PIN);
    gpio_set_dir(LED_PIN, GPIO_OUT);

    // Inicializa o botão como entrada
    gpio_init(BT_A);
    gpio_pull_up(BT_A);
    gpio_set_dir(BT_A, GPIO_IN);
    gpio_init(BT_B);
    gpio_pull_up(BT_B);
    gpio_set_dir(BT_B, GPIO_IN);

    // Configura a interrupção para os botões
    gpio_set_irq_enabled_with_callback(BT_A, GPIO_IRQ_EDGE_RISE, true, &minhaIRQ);
    gpio_set_irq_enabled(BT_B, GPIO_IRQ_EDGE_RISE, true);

    while (true) {
        gpio_put(LED_PIN, 1);
        sleep_ms(piscarMs);
        gpio_put(LED_PIN, 0);
        sleep_ms(piscarMs);
    }
    return 0;
}