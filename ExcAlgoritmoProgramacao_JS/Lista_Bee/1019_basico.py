import math

t = int(input())
h = math.floor(t / 3600)
m = math.floor((t % 3600) / 60)
s = math.floor((t % 60))

print(f"{h}:{m}:{s}")