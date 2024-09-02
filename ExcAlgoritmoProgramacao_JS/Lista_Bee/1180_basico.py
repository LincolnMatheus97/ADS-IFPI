def main():
    n = get_Number()
    x = get_Text().split(" ")
    menor = float('inf') 
    posicao_Menor = 0

    for i in range (n):
        numero = int(x[i])

        if (numero < menor):
            menor = numero
            posicao_Menor = i

    print("Menor valor:", menor)
    print("Posicao:", posicao_Menor)

def get_Number():
    return int(input().strip())

def get_Text():
    return input().strip()

main()