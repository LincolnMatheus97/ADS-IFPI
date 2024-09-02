def main():
    matriz = []
    n, m = map(int, get_Text().split(' '))
    linha = 0
    coluna = 0

    for _ in range(n):
        numeros = list(map(int, get_Text().split(' ')))
        matriz.append(numeros)

    for i in range(n):
        for j in range(m):
            if matriz[i][j] == 42:
                if (
                    i > 0 and i < n - 1 and
                    j > 0 and j < m - 1 and
                    matriz[i - 1][j - 1] == 7 and
                    matriz[i - 1][j] == 7 and
                    matriz[i - 1][j + 1] == 7 and
                    matriz[i][j - 1] == 7 and
                    matriz[i][j + 1] == 7 and
                    matriz[i + 1][j - 1] == 7 and
                    matriz[i + 1][j] == 7 and
                    matriz[i + 1][j + 1] == 7
                ):
                    linha = i + 1
                    coluna = j + 1
                    break
                
        if (linha != 0 and coluna != 0): 
            break

    print(f'{linha} {coluna}')
    
def get_Text():
    return input().strip()

main()