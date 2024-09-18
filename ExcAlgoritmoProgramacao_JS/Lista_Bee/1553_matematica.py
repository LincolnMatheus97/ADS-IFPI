def main():
    entrada = get_Text()

    while entrada != '':
        entradas = entrada.split(' ')
        n = int(entradas[0])
        m = int(entradas[1])

        fib = fibonacci(n)
        fib_N = fibonacci(fib)
        resto = fib_N % m

        print(resto)

        entrada = get_Text()
    
def get_Text():
    try:
        return input().strip()
    except EOFError:
        return ''
    
def fibonacci(numero):
    if numero == 1 or numero == 2:
        return 1
    
    a = 1
    b = 1

    for i in range(3, numero + 1):
        soma = a + b
        a = b
        b = soma
    
    return b

main()