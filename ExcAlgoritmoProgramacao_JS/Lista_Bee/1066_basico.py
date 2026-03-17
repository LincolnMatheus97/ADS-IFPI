pr = 0; im = 0; ps = 0; ng = 0

for i in range(5):
    x = int(input())
    if (x >+ 0): ps += 1
    elif (x < 0): ng += 1
    if (x % 2 == 0): pr += 1
    else: im += 1
print(f"{pr} valor(es) par(es)")
print(f"{im} valor(es) impar(es)")
print(f"{ps} valor(es) positivo(s)")
print(f"{ng} valor(es) negativo(s)")