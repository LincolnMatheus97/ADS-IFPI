def main ():
    n = get_Number()

    while (n != 0):
        matriz = []

        for i in range(n):
            linha = []

            for j in range(n):
                valor = abs(i - j) + 1
                linha.append(valor)
            
            matriz.append(linha)
        
        for k in range(len(matriz)):
            linhas = ''

            for m in range(len(matriz[k])):
                linhas += str(matriz[k][m]).rjust(3, ' ') + (' ' if m < len(matriz[k]) - 1 else '')

            print(linhas)
        
        print()
        n = get_Number()

def get_Number():
    return int(input().strip())

main()