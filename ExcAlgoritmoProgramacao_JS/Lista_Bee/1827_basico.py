import math

def main():
    m = get_Text()

    while m != '':
        if m is not None:
            try:
                n = int(m)
            except ValueError:
                m = get_Text()
                continue
            
            matriz = []
            mensagem = ''

            for i in range(n):
                linha = []

                for j in range(n):
                    if (i >= math.floor(n / 3) and i < math.ceil(2 * n / 3) and
                        j >= math.floor(n / 3) and j < math.ceil(2 * n / 3)): 
                        if i == j and i + j == n - 1:
                            linha.append(4)
                        else:
                            linha.append(1)
                    elif i == j:
                        linha.append(2)
                    elif i + j == n - 1:
                        linha.append(3)
                    else:
                        linha.append(0)
            
                matriz.append(linha)
        
            for linha in matriz:
                mensagem += ''.join(str(x) for x in linha) + '\n'
        
            print(mensagem.strip())
            print('')

            m = get_Text()
    

def get_Text():
    try:
        return input().strip()
    except EOFError:
        return ''

main()