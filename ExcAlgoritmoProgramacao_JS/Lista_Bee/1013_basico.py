# valores = map(int, input().split())
# m = max(valores)
# print(f"{m} eh o maior")

def main():
    v1, v2, v3 = map(int, input().split())
    m = ehmaior(v1, v2)
    m = ehmaior(m, v3)
    print(f"{m} eh o maior")

def ehmaior(n1, n2):
    maior = int((n1 + n2 + abs(n1 - n2)) / 2)
    return maior

main()