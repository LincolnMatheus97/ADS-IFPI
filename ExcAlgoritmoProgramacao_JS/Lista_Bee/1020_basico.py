import math

td = int(input())
a = math.floor(td / 365)
m = math.floor((td % 365) / 30)
d = math.floor((td % 365) % 30)

print(f"{a} ano (s)")
print(f"{m} mes (s)")
print(f"{d} dia (s)")