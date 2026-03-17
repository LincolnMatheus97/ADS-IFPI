x = float(input())

if (x < 0 or x > 100):
    print("Fora do intervalo")
elif ((x >= 0) and (x <= 25.0)):
    print("Intervalo [0,25]")
elif (x <= 50.0):
    print("Intervalo (25,50]")
else:
    print("Intervalo (75,100]")