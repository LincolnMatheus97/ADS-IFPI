import math

x = int(input())

n100 = math.floor(x / 100)
n50 = math.floor((x % 100) / 50)
n20 = math.floor(((x % 100) % 50) / 20)
n10 = math.floor(((x % 50) % 20) / 10)
n5 = math.floor(((x % 20) % 10) / 5)
n2 = math.floor(((x % 10) % 5) / 2)
n1 = math.floor(((x % 5) % 2) / 1)

print(x)
print(f"{n100} nota(s) de R$ 100,00")
print(f"{n50} nota(s) de R$ 50,00")
print(f"{n20} nota(s) de R$ 20,00")
print(f"{n10} nota(s) de R$ 10,00")
print(f"{n5} nota(s) de R$ 5,00")
print(f"{n2} nota(s) de R$ 2,00")
print(f"{n1} nota(s) de R$ 1,00")