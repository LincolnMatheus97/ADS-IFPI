RESPOSTAS DA ATIVIDADE.

2.1 -> A saida será 2, 1 e A pilha esta vazia. Pois toda vez desempilar é chamado ele remove e mostra o topo da pilha, ate o momento que a
pilha estara vazia e retornara a mensagem de erro STACK UNDERFLOW "A pilha está vazia".
2.2 -> Ira retornar a mensagem de erro STACK OVERFLOW "A pilha esta cheia", pois o topoP(pilha) nunca chegara a 0. Pois esta sendo divido por 2, o
que resulta em um valor cada vez menor(0.25, 0.125, 0.0625) mas nunca exatamente '0'.
2.6 -> Ira imprimir ("tres tres tres"), pois quando chamamos a função empilhar dentro do loop, está empilhando
um ponteiro para a mesma regiao de memoria (s). Como s é sobrescrito a cada iteração, todos os elementos na pilha acabam por apontando para
o mesmo conteudo. No caso a pilha, empilhou 3 endereços de memoria de (s), mas como s é sobrescrito toda vez no loop ele tem sempre o ultimo conteudo sobrescrito no caso 'tres', ou seja, quando desempilhamos e mostramos ira aparecer so tres tres tres.  