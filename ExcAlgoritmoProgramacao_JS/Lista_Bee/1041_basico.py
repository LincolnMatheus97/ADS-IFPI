c1, c2 = map(float, input().split())

if (c1 == 0 and c2 == 0):
    print("Origem")
elif (c1 == 0 and c2 != 0):
    print("Eixo y")
elif (c1 != 0 and c2 == 0):
    print("Eixo x")   
elif (c1 > 0 and c2 > 0):
    print("Q1")
elif (c1 < 0 and c2 > 0):
    print("Q2")
elif (c1 < 0 and c2 < 0):
    print("Q3")
else:
    print("Q4")