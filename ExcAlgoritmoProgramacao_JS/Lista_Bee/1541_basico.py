import math

def main():
    entrada = get_Text().split(' ')

    while len(entrada) == 3:
        a = int(entrada[0])
        b = int(entrada[1])
        c = int(entrada[2])

        area_Total = a * b
        area_Maxima_Total = area_Total / c
        lado = math.sqrt(area_Maxima_Total)
        print(f'{int(lado * 10)}')

        entrada = get_Text().split(' ')
    
def get_Text():
    return input().strip()

main()