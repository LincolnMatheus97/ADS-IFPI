din = input().split()
hi, mi, si = map(int, input().split(":"))
dfn = input().split()
hf, mf, sf = map(int, input().split(":"))

di = int(din[1]); df = int(dfn[1])

stf = (df * 86400) + (hf * 3600) + (mf * 60) + sf
sti = (di * 86400) + (hi * 3600) + (mi * 60) + si

d = stf - sti
if (d <= 0): d += 86400

dia = int(d / 86400)
hora = int((d % 86400) / 3600)
min = int((d % 3600) / 60)
seg = int((d % 3600) % 60)

print(f"{dia} dia(s)")
print(f"{hora} hora(s)")
print(f"{min} minuto(s)")
print(f"{seg} segundo(s)")