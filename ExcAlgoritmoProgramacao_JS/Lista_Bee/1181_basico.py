def main():
    matriz = []
    ordem = 12
    linha_Desejada = get_Number()
    operacao = get_Text().upper()
    s = 0

    for i in range(ordem):
        linha = []

        for j in range(ordem):
            valor = get_Number()
            linha.append(valor)

            if (i == linha_Desejada):
                s += valor

        matriz.append(linha)
    
    m = s / ordem

    if (operacao == 'S'):
        print(f"{s:.1f}")
    elif (operacao == 'M'):
        print(f"{m:.1f}")

def get_Number():
    return float(input().strip())

def get_Text():
    return input().strip()

main()