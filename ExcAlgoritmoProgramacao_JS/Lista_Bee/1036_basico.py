import math

a, b, c = map(float, input().split())
d = (b ** 2) - 4 * a * c

if (a == 0 or d <= 0):
    print('Impossivel de calcular')
else:
    r1 = (-(b) + math.sqrt(d)) / (2 * a)
    r2 = (-(b) - math.sqrt(d)) / (2 * a)
    print(f"R1 = {r1:.5f}")
    print(f"R2 = {r2:.5f}")
    