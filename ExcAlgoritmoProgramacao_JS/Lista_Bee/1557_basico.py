def main():
    n = get_Number()

    while n != 0:
        matriz = []

        for i in range(n):
            linha = []

            for j in range(n):
                valor = int(2 ** (i + j))
                linha.append(valor)

            matriz.append(linha)

        print_Matriz(matriz)
        print('')

        n = get_Number()
    
def get_Number():
    return int(input().strip())

def print_Matriz(matriz):
    max_Tamanho = len(str(max(max(linha) for linha in matriz)))

    for linha in matriz:
        linhas = ''

        for j, valor in enumerate(linha):
            coluna = str(valor).rjust(max_Tamanho, ' ')
            linhas += coluna + (' ' if j != len(linha) - 1 else '')
        
        print(linhas)

main()