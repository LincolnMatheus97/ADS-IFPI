p = 0
s = 0.0

for i in range(6):
    x = float(input())
    if (x > 0): p += 1; s += x
print(f"{p} valores positivos")
print(f"{s/p}")