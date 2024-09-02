def main():
    matriz = []
    ordem = 12
    operacao = get_Text().upper()
    s = 0
    count = 0

    for i in range(ordem):
        linha = []

        for j in range(ordem):
            valor = get_Number()
            linha.append(valor)

            if ((i < j) and ((i + j) < ordem - 1)):
                s += valor
                count += 1
            
        matriz.append(linha)
    
    m = s / count

    if (operacao == 'S'):
        print(f"{s:.1f}")
    elif (operacao == 'M'):
        print(f"{m:.1f}")

def get_Number():
    return float(input().strip())

def get_Text():
    return input().strip()

main()