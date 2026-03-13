p1, q1, v1 = map(float, input().split())
p2, q2, v2 = map(float, input().split())

print(f"VALOR A PAGAR: R$ {(q1*v1) + (q2*v2):.2f}")