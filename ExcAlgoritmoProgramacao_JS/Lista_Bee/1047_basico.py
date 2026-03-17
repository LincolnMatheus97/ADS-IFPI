hi, mi, hf, mf = map(int, input().split())

tmf = (60 * hf) + mf
tmi = (60 * hi) + mi
d = tmf - tmi

if (d <= 0): d += 1440

h = int(d / 60)
m = d % 60

print(f"O JOGO DUROU {h} HORA(S) E {m} MINUTO(S)")