# Rede Social 

Este repositório contém a implementação de uma rede social em Java, utilizando **Jackson** para persistência de dados em JSON. O sistema permite a criação de perfis, envio e aceitação de pedidos de amizade, publicações e interações entre usuários.

---

## Estrutura do Projeto

O projeto segue a seguinte organização:

```
/Controllers   -> Classes que controlam a lógica principal do sistema
/Models        -> Classes que representam os objetos do sistema (Perfis, Publicações, etc.)
/Services      -> Classe responsável pela persistência dos dados
/Main.java     -> Classe principal para executar a aplicação
/pom.xml       -> Configuração do Maven para gerenciamento de dependências
```

---

## Funcionalidades
✅ Criar perfis com apelido, email, emoji e status (ativo/inativo)  
✅ Adicionar amigos e enviar pedidos de amizade  
✅ Aceitar ou recusar solicitações de amizade  
✅ Criar publicações e permitir interações  
✅ Persistência dos dados em **JSON** para manter informações entre execuções  
✅ Simulação de um **perfil logado**, permitindo que o usuário realize ações como se estivesse em uma rede social real

---

## Tecnologias Utilizadas
- **Java**  
- **Maven** para gerenciamento de dependências  
- **Jackson** para serialização/desserialização de JSON  
- **Coleções Java** (`ArrayList`) para manipulação de listas de perfis, amizades e publicações  

---

## Persistência de Dados
Os dados da rede social são armazenados no arquivo **`sistema_rede_social.json`**, utilizando **Jackson** para converter os objetos Java para JSON e vice-versa.

### Serialização e Desserialização
- **Serialização:** Converte objetos Java para JSON e os salva em um arquivo.
- **Desserialização:** Lê o arquivo JSON e recria os objetos Java na memória.

### Como os dados são armazenados?
- Perfis são salvos como objetos JSON
- Amigos são armazenados como **apelidos** (evitando referências cíclicas)
- Publicações possuem referência ao apelido do autor
- Pedidos de amizade possuem referência ao apelido do solicitante e solicitado
- O JSON também salva **o array de interações de cada publicação**, permitindo registrar curtidas e reações

### Exemplo de JSON salvo:
```json
{
  "perfil": [
    {
      "apelido": "Lincoln",
      "email": "lin@email.com",
      "status": true,
      "emoji": "😞",
      "amigos": ["Thalisson"],
      "id": 1
    },
    {
      "apelido": "Thalisson",
      "email": "tha@email.com",
      "status": true,
      "emoji": "😍",
      "amigos": ["Lincoln"],
      "id": 2
    }
  ],
  "pedidosDeAmizade": [],
  "publicacao": [
    {
      "id": 1,
      "conteudo": "foto em casa",
      "perfilAssociado": "Lincoln",
      "dataPublicacao": "2025-01-31T21:35:29.336+00:00",
      "Interacoes": [
        {
          "id": 1,
          "tipo": "CURTIR",
          "perfilAutor": "Thalisson"
        }
      ]
    }
  ]
}
```

---

## Como Executar o Projeto
1. Clone este repositório:
   ```sh
   git clone 
   ```

2. Abra o projeto em sua IDE favorita (Eclipse, IntelliJ, VS Code...)

3. Certifique-se de que o **Maven** está configurado corretamente e baixe as dependências:
   ```sh
   mvn clean install
   ```

4. Execute a classe `Main.java` para iniciar o sistema.

5. O sistema criará automaticamente o arquivo **`sistema_rede_social.json`** caso ele não exista.

---

Feito com por Lincoln Matheus e Thalisson Moura
