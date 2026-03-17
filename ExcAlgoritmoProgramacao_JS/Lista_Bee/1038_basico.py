c, q = map(int, input().split())

card = {
    1 : 4.00,
    2 : 4.50,
    3 : 5.00,
    4 : 2.00,
    5 : 1.50
}

print(f"Total: R$ {(card[c] * q):.2f}")