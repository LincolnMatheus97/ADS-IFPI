1.  
    F
    F
    F
    V
    V
    V
    V

2.  
    Sim, havera um problema de compilação, pois a variavel quantReservas nao foi inicializada e tambem
    nao foi atribuida a um construtor.

4.
    O erro acontece pois apartir da criação do construtor na classe, aonde ele espera um argumento para
    o volume, caso seja instanciado um objeto, temos que passar um argumento para que o objeto seja criado.
    Para resolver isso, passamos o argumento, um valor esperado para o volume, depois printamos o valor do
    volume.

5.
    a) O resultado dos prints é 90. Pois todas os objetos estao apontando para as mesmas referencias, qualquer
    que seja o metodo aplicado em alguma dos objetos, sera feita a alteração para todos.
    b) O objeto c1 agora passa a apontar para a referencia do objeto c2.

11. 
    Acho mais correto, desconsiderar a alteração. Isso poupa vericaçoes extras que os comportamentos iriam fazer.