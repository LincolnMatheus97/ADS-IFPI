lista = {
    '61': 'Brasilia',
    '71': 'Salvador',
    '11': 'Sao Paulo',
    '21': 'Rio de Janeiro',
    '32': 'Juiz de Fora',
    '19': 'Campinas',
    '27': 'Vitoria',
    '31': 'Belo Horizonte'
}

x = input()
# if x in lista:
#     print(lista[x])
# else:
#     print('DDD nao cadastrado')
print(lista.get(x, 'DDD nao cadastrado'))