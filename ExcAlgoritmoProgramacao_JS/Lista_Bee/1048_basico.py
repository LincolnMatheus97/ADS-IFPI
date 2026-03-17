x = float(input())

r = 0.0
p = ''

if (x >= 0 and x <= 400):
    r = 0.15; p = '15 %'
elif (x <= 800):
    r = 0.12; p = '12 %'
elif (x <= 1200):
    r = 0.1; p = '10 %'
elif (x <= 2000):
    r = 0.07; p = '7 %'
else:
    r = 0.04; p = '4 %'

print(f"Novo salario: {(x + (x * r)):.2f}")
print(f"Reajuste ganho: {(x * r):.2f}")
print(f"Em percentual: {p}")