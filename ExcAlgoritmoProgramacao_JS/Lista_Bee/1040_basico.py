n1, n2, n3, n4 = map(float, input().split())

m1 = ((n1 * 2) + (n2 * 3) + (n3 * 4) + (n4 * 1)) / 10
print(f"Media: {m1:.1f}")

if (m1 < 5.0):
    print("Aluno reprovado.")
elif (m1 >= 7.0):
    print("Aluno aprovado.")
else:
    print("Aluno em exame.")
    nf = float(input())
    m2 = (m1 + nf) / 2

    print(f"Nota do exame: {nf}")

    if (m2 < 5.0):
        print("Aluno reprovado.")
    else:
        print("Aluno aprovado.")
    
    print(f"Media final: {m2:.1f}")