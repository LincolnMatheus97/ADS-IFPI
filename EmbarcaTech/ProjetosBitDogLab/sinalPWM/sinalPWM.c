#include <stdio.h>
#include "pico/stdlib.h"
#include "hardware/pwm.h"

void set_pwm_duty(uint slice_num, uint channel, uint duty_cycle) {
    pwm_set_chan_level(slice_num, channel, duty_cycle);
}

int main() {
    stdio_init_all(); // Inicializa a comunicação serial
    sleep_ms(7000);   // Aguarde para estabilizar a conexão USB

    printf("Inicializando PWM e LEDs...\n");

    // Configuração dos pinos PWM
    gpio_set_function(13, GPIO_FUNC_PWM); // Vermelho
    gpio_set_function(11, GPIO_FUNC_PWM); // Verde
    gpio_set_function(12, GPIO_FUNC_PWM); // Azul

    // Obter slices e canais
    uint slice_red = pwm_gpio_to_slice_num(13);    // Slice 6
    uint channel_red = pwm_gpio_to_channel(13);    // Channel B
    uint slice_green = pwm_gpio_to_slice_num(11);  // Slice 5
    uint channel_green = pwm_gpio_to_channel(11);  // Channel B
    uint slice_blue = pwm_gpio_to_slice_num(12);   // Slice 6
    uint channel_blue = pwm_gpio_to_channel(12);   // Channel A

    // Debugging - Mostrar informações no monitor serial
    printf("GPIO 13 (Red): Slice %d, Channel %c\n", slice_red, channel_red == PWM_CHAN_A ? 'A' : 'B');
    printf("GPIO 11 (Green): Slice %d, Channel %c\n", slice_green, channel_green == PWM_CHAN_A ? 'A' : 'B');
    printf("GPIO 12 (Blue): Slice %d, Channel %c\n", slice_blue, channel_blue == PWM_CHAN_A ? 'A' : 'B');

    // Configuração de TOP e divisor (frequência de 1kHz)
    pwm_set_wrap(slice_red, 255);
    pwm_set_wrap(slice_green, 255);
    pwm_set_wrap(slice_blue, 255);

    pwm_set_clkdiv(slice_red, 64);
    pwm_set_clkdiv(slice_green, 64);
    pwm_set_clkdiv(slice_blue, 64);

    // Habilitar PWM
    pwm_set_enabled(slice_red, true);
    pwm_set_enabled(slice_green, true);
    pwm_set_enabled(slice_blue, true);

    // Loop para variar o brilho
    while (true) {
        for (int i = 0; i <= 255; i++) {
            set_pwm_duty(slice_red, channel_red, i);         // Vermelho
            set_pwm_duty(slice_green, channel_green, 255 - i); // Verde
            set_pwm_duty(slice_blue, channel_blue, i / 2);     // Azul
            sleep_ms(10);
        }
    }
}