Definições e Inicializações:

    - PROCESSOS e RECURSOS são definidos como 3 e 4, respectivamente.
    - E é um array que representa os recursos existentes no sistema.
    - A é um array que representa os recursos disponíveis no sistema.
    - C é uma matriz que representa a alocação atual de recursos para cada processo.
    - R é uma matriz que representa as requisições de recursos de cada processo.

Função verificar_seguranca:

    - Esta função verifica se o sistema está em um estado seguro.
    - finalizado é um array booleano que indica se um processo foi finalizado.
    - recursos_disp é um array que copia os recursos disponíveis (A).
    - O loop while continua até que todos os processos sejam finalizados (count < PROCESSOS).
    - Dentro do loop, a função verifica se há algum processo que pode ser executado com os recursos disponíveis.
    - Se um processo pode ser executado (pode_executar), os recursos alocados a ele são liberados e adicionados aos recursos disponíveis.
    - Se nenhum processo pode ser executado, a função retorna "Deadlock detectado!", indicando um deadlock.
    - Se todos os processos são finalizados sem problemas, a função retorna a mensagem "Nenhum deadlock detectado".