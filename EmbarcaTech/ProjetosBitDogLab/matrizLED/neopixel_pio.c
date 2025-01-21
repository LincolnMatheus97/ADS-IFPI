#include <stdio.h>
#include "pico/stdlib.h"
#include "hardware/gpio.h"
#include "hardware/pio.h"
#include "hardware/clocks.h"

// Biblioteca gerada pelo arquivo .pio durante compilação.
#include "ws2818b.pio.h"

// Definição do número de LEDs e pino.
#define LED_COUNT 25
#define LED_PIN 7
#define BT_A 5
#define BT_B 6

// Definição de pixel GRB
struct pixel_t
{
  uint8_t G, R, B; // Três valores de 8-bits compõem um pixel.
};
typedef struct pixel_t pixel_t;
typedef pixel_t npLED_t; // Mudança de nome de "struct pixel_t" para "npLED_t" por clareza.

// Declaração do buffer de pixels que formam a matriz.
npLED_t leds[LED_COUNT];

// Variáveis para uso da máquina PIO.
PIO np_pio;
uint sm;

/**
 * Inicializa a máquina PIO para controle da matriz de LEDs.
 */
void npInit(uint pin)
{

  // Cria programa PIO.
  uint offset = pio_add_program(pio0, &ws2818b_program);
  np_pio = pio0;

  // Toma posse de uma máquina PIO.
  sm = pio_claim_unused_sm(np_pio, false);
  if (sm < 0)
  {
    np_pio = pio1;
    sm = pio_claim_unused_sm(np_pio, true); // Se nenhuma máquina estiver livre, panic!
  }

  // Inicia programa na máquina PIO obtida.
  ws2818b_program_init(np_pio, sm, offset, pin, 800000.f);

  // Limpa buffer de pixels.
  for (uint i = 0; i < LED_COUNT; ++i)
  {
    leds[i].R = 0;
    leds[i].G = 0;
    leds[i].B = 0;
  }
}

/**
 * Atribui uma cor RGB a um LED.
 */
void npSetLED(const uint index, const uint8_t r, const uint8_t g, const uint8_t b)
{
  leds[index].R = r;
  leds[index].G = g;
  leds[index].B = b;
}

/**
 * Limpa o buffer de pixels.
 */
void npClear()
{
  for (uint i = 0; i < LED_COUNT; ++i)
    npSetLED(i, 0, 0, 0);
}

/**
 * Escreve os dados do buffer nos LEDs.
 */
void npWrite()
{
  // Escreve cada dado de 8-bits dos pixels em sequência no buffer da máquina PIO.
  for (uint i = 0; i < LED_COUNT; ++i)
  {
    pio_sm_put_blocking(np_pio, sm, leds[i].G);
    pio_sm_put_blocking(np_pio, sm, leds[i].R);
    pio_sm_put_blocking(np_pio, sm, leds[i].B);
  }
  sleep_us(100); // Espera 100us, sinal de RESET do datasheet.
}

/**
 * Converte as coordenadas (x, y) na matriz 5x5 para o índice da fila linear.
 *
 * @param x A coluna (0 a 4).
 * @param y A linha (0 a 4).
 * @return O índice correspondente na fila (0 a 24).
 */
int getIndex(int x, int y)
{
  // Se a linha for par (0, 2, 4), percorremos da esquerda para a direita.
  // Se a linha for ímpar (1, 3), percorremos da direita para a esquerda.
  if (y % 2 == 0)
  {
    return y * 5 + x; // Linha par (esquerda para direita).
  }
  else
  {
    return y * 5 + (4 - x); // Linha ímpar (direita para esquerda).
  }
}

/**
 * Desenha um coraçao na matriz de LEDs.
 *
 * @param color A cor do coração.
 * @param x A linha onde o coração será desenhado.
 * @param y A coluna onde o coração será desenhado.
 * @param r A intensidade do vermelho (0 a 100).
 * @param g A intensidade do vermelho (0 a 100).
 * @param b A intensidade do vermelho (0 a 100).
 *
 */
void ledsCoração(int x, int y, int r, int g, int b)
{

  // Normaliza os valores de r, g e b para o intervalo de 0 a 255
  int normaliseR = (r * 255) / 100;
  int normaliseG = (g * 255) / 100;
  int normaliseB = (b * 255) / 100;

  npSetLED(getIndex(y, x), normaliseR, normaliseG, normaliseB);
}

volatile int desenhar = 1;

void minhaIRQ(uint gpio, uint32_t events)
{
  if (gpio == BT_A)
  {
    desenhar = 0;
  }
  else if (gpio == BT_B)
  {
    desenhar = 1;
  }
}

int main()
{
  // Inicializa o sistema.
  stdio_init_all();
  npInit(LED_PIN);
  npClear(); // Garante que todos os LEDs comecem apagados.

  // Inicializa os botões como entrada.
  gpio_init(BT_A);
  gpio_init(BT_B);
  gpio_set_dir(BT_A, GPIO_IN);
  gpio_set_dir(BT_B, GPIO_IN);
  gpio_pull_up(BT_A);
  gpio_pull_up(BT_B);

  gpio_set_irq_enabled_with_callback(BT_A, GPIO_IRQ_EDGE_RISE, true, &minhaIRQ);
  gpio_set_irq_enabled_with_callback(BT_B, GPIO_IRQ_EDGE_RISE, true, &minhaIRQ);

  // Cria desenhos acendendo LEDs em sequência. Quando todos os LEDs estão acesos, todos os LEDs são apagados (npClear) e o loop reinicia.
  while (true)
  {
    if (desenhar)
    {
      for (int i = 0; i < 5; i++)
      {
        for (int j = 0; j < 5; j++)
        {
          if (!desenhar)
          {
            npClear(); // Apaga os LEDs
            npWrite();
            break; // Sai do loop interno
          }
          if (i == 0 && j == 2)
          {
            ledsCoração(i, j, 100, 0, 0);
          }
          else if (i == 1 && (j == 1 || j == 3))
          {
            ledsCoração(i, j, 100, 0, 0);
          }
          else if (i == 2 && (j == 0 || j == 4))
          {
            ledsCoração(i, j, 100, 0, 0);
          }
          else if (i == 3 && (j == 0 || j == 2 || j == 4))
          {
            ledsCoração(i, j, 100, 0, 0);
          }
          else if (i == 4 && (j == 1 || j == 3))
          {
            ledsCoração(i, j, 100, 0, 0);
          }
          npWrite();
          sleep_ms(100);
        }
      }
      sleep_ms(1000);
      npClear();
    }
    else
    {
      npClear();
      npWrite();
      sleep_ms(100);
    }
  }
}