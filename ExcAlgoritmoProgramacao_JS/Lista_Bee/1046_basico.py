hi, ht = map(int, input().split())

d = ht - hi
if (d <= 0): d +=24
print(f"O JOGO DUROU {d} HORA(S)")