Questionamentos:

1. Sim, a classe banco faz o cadastro tanto de clientes quanto de contas e gerencia as regras de negocios. No metodos de inserir cliente e no de 
inserir conta, quanto no metodo associarContaCliente.
2. Sim, seria mais adequado. Estarias encapsulando as responsabilidades da classe Banco, deixando a classe mais modularizada e manutenivel.
3. Deixaria em na classe Banco. Mas se vamos separar por cadastros, o metodo poderia ser divido entre a logica de assossiação(em Banco) e a
verificação de regras de negocios(em cadastrarCliente ou cadastrarConta). Assim a classe Banco poderia deixar as validações de cadastros para as
classes de cadastro, mas a associação em si sera um comportamento de Banco.