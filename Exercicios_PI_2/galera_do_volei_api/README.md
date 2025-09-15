# Galera do vôlei 1.0

## Visão Geral e Jornada do Usuário

Este documento apresenta o design de uma API para a atividade acadêmica "Galera do Vôlei". O principal objetivo é a construção e visualização de uma API que vai além das operações básicas de um CRUD (Create, Read, Update, Delete). pensando em "romper a barreira dos CRUDs ordinários", o design foca na modelagem de processos e transações que representam o fluxo real de interações dos usuários. Para guiar o desenvolvimento, essas interações foram mapeadas em duas jornadas principais: a do **Organizador** e a do **Jogador**.

### Jornada do Organizador (Moderador)

O Organizador é responsável por criar e gerenciar os eventos.

1.  **Cria uma nova partida.**
    * `POST /partidas`

2.  **Divulga a partida, convidando jogadores ou abrindo para inscrições.**
    * `POST /convites` (para convidar jogadores específicos)
    * `POST /partidas/{id}/inscricoes` (para que qualquer jogador possa se inscrever)

3.  **Gerencia os pedidos de participação.**
    * `GET /partidas/{id}/inscricoes` (para listar as solicitações)
    * `POST /inscricoes/{id}/aceitar` (para aprovar uma solicitação)
    * `POST /inscricoes/{id}/rejeitar` (para negar uma solicitação)

4.  **Fecha as inscrições e confirma a partida.**
    * `PATCH /partidas/{id}` (alterando a `situacao` para "Fechada")

5.  **No dia do jogo, registra a presença (check-in) dos participantes.**
    * *Não implementado*

6.  **Após a partida, avalia os jogadores que compareceram.**
    * *Não implementado*

7.  **Recebe avaliações sobre sua organização.**
    * *Não implementado*.

### Jornada do Jogador (Participante)

O Jogador é quem busca e participa das partidas.

1.  **Procura por partidas abertas.**
    * `GET /partidas`

2.  **Encontra uma interessante e solicita a participação (se candidata) ou aceita um convite.**
    * `POST /partidas/{id}/inscricoes` (para se candidatar)
    * `POST /convites/{id}/aceitar` (para aceitar um convite recebido)

3.  **Recebe a confirmação de que foi aceito.**
    * O status da sua inscrição ou convite é alterado para "aceita".

4.  **Realiza o pagamento (se houver taxa).**
    * *Não implementado*

5.  **Caso não possa ir, informa a desistência.**
    * *Não implementado*

6.  **No dia, vai ao jogo e confirma sua presença (check-in).**
    * *Não implementado*

7.  **Após a partida, avalia a partida e o organizador.**
    * `POST /partidas/{id}/avaliacoes`
8.  **Recebe feedback sobre sua participação.**
    * *Não implementado*.

### Link da API no Apidog : https://galeradovolei.apidog.io
---

# Galera do vôlei 1.0

Base URLs: http://localhost:3333

# Authentication

# Convite

## GET Listar convites

GET /convites

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string| no |none|

> Response Examples

> 200 Response

```json
[
  {
    "id": 1,
    "status": "aceita",
    "remetente": {
      "id_remetente": 1,
      "nome_remetente": "Thalisson"
    },
    "destinatario": {
      "id_destinatario": 2,
      "nome_destinatario": "Natiele"
    },
    "id_partida": 1
  }
]
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» id|integer|false|none||none|
|» status|string|false|none||none|
|» remetente|object|false|none||none|
|»» id_remetente|integer|true|none||none|
|»» nome_remetente|string|true|none||none|
|» destinatario|object|false|none||none|
|»» id_destinatario|integer|true|none||none|
|»» nome_destinatario|string|true|none||none|
|» id_partida|integer|false|none||none|

## POST Criar convite

POST /convites

> Body Parameters

```json
{
  "nome_remetente": "Thalisson",
  "nome_destinatario": "Lucas"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string| no |none|
|User-Agent|header|string| no |none|
|body|body|object| no |none|
|» nome_remetente|body|string| yes |none|
|» nome_destinatario|body|string| yes |none|

> Response Examples

> 201 Response

```json
{
  "id": 2,
  "status": false,
  "remetente": {
    "id_remetente": 1,
    "nome_remetente": "Thalisson"
  },
  "destinatario": {
    "id_destinatario": 3,
    "nome_destinatario": "Lucas"
  },
  "id_partida": 1
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|Inline|

### Responses Data Schema

HTTP Status Code **201**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» id|integer|true|none||none|
|» status|boolean|true|none||none|
|» remetente|object|true|none||none|
|»» id_remetente|integer|true|none||none|
|»» nome_remetente|string|true|none||none|
|» destinatario|object|true|none||none|
|»» id_destinatario|integer|true|none||none|
|»» nome_destinatario|string|true|none||none|
|» id_partida|integer|true|none||none|

## POST Rejeitar convite

POST /convites/{id}/rejeitar

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|User-Agent|header|string| no |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

## POST Aceitar convite

POST /convites/{id}/aceitar

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|User-Agent|header|string| no |none|

> Response Examples

> 200 Response

```json
{
  "message": "Jogador Natiele aceito na partida!"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» message|string|true|none||none|

## DELETE Deletar convite

DELETE /convites/{id}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|User-Agent|header|string| no |none|

> Response Examples

> 204 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|none|Inline|

### Responses Data Schema

# Inscrição

## GET Listar inscrições da partida

GET /partidas/{id}/inscricoes

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|User-Agent|header|string| no |none|

> Response Examples

> 200 Response

```json
[
  {
    "id_inscricao": 1,
    "id_jogador": 3,
    "nome_jogador": "Marcos",
    "status": "pendente",
    "data": "2025-09-15T01:33:28.936Z"
  },
  {
    "id_inscricao": 2,
    "id_jogador": 4,
    "nome_jogador": "Lucas",
    "status": "pendente",
    "data": "2025-09-15T01:33:50.605Z"
  }
]
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» id_inscricao|integer|true|none||none|
|» id_jogador|integer|true|none||none|
|» nome_jogador|string|true|none||none|
|» status|string|true|none||none|
|» data|string|true|none||none|

## POST Criar inscrição

POST /partidas/{id}/inscricoes

> Body Parameters

```json
{
  "nome_jogador": "Lucas"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|Content-Type|header|string| no |none|
|User-Agent|header|string| no |none|
|body|body|object| no |none|
|» nome_jogador|body|string| yes |none|

> Response Examples

> 201 Response

```json
{
  "id_inscricao": 2,
  "id_jogador": 4,
  "nome_jogador": "Lucas",
  "status": "pendente",
  "data": "2025-09-15T01:33:50.605Z"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|Inline|

### Responses Data Schema

HTTP Status Code **201**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» id_inscricao|integer|true|none||none|
|» id_jogador|integer|true|none||none|
|» nome_jogador|string|true|none||none|
|» status|string|true|none||none|
|» data|string|true|none||none|

## POST Rejeitar inscrição

POST /inscricoes/{id}/rejeitar

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|User-Agent|header|string| no |none|

> Response Examples

> 400 Response

```json
{
  "message": "ID inválido. Por favor digite um ID válido"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» message|string|true|none||none|

## POST Aceitar inscrição

POST /inscricoes/{id}/aceitar

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|User-Agent|header|string| no |none|

> Response Examples

> 200 Response

```json
{
  "message": "Jogador Marcos aceito na partida!"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» message|string|true|none||none|

# Jogador

## GET Listar jogadores

GET /jogadores

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string| no |none|

> Response Examples

> 200 Response

```json
[
  {
    "id": 1,
    "nome": "Thalisson",
    "moderador": true,
    "sexo": "Masculino",
    "categoria": "Amador"
  },
  {
    "id": 2,
    "nome": "Natiele",
    "moderador": false,
    "sexo": "Feminino",
    "categoria": "Intermediario"
  },
  {
    "id": 3,
    "nome": "Marcos",
    "moderador": false,
    "sexo": "Masculino",
    "categoria": "Amador"
  }
]
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» id|integer|true|none||none|
|» nome|string|true|none||none|
|» moderador|boolean|true|none||none|
|» sexo|string|true|none||none|
|» categoria|string|true|none||none|

## POST Criar jogador

POST /jogadores

> Body Parameters

```json
{
  "nome": "Lucas",
  "sexo": "Masculino",
  "categoria": "Federado"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string| no |none|
|User-Agent|header|string| no |none|
|body|body|object| no |none|
|» nome|body|string| yes |none|
|» sexo|body|string| yes |none|
|» categoria|body|string| yes |none|

> Response Examples

> 201 Response

```json
{
  "id": 4,
  "nome": "Lucas",
  "moderador": false,
  "sexo": "Masculino",
  "categoria": "Federado"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|Inline|

### Responses Data Schema

HTTP Status Code **201**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» id|integer|true|none||none|
|» nome|string|true|none||none|
|» moderador|boolean|true|none||none|
|» sexo|string|true|none||none|
|» categoria|string|true|none||none|

## PATCH Atualizar dados de jogador

PATCH /jogadores/{id}

> Body Parameters

```json
{
  "categoria": "Amador"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|Content-Type|header|string| no |none|
|User-Agent|header|string| no |none|
|body|body|object| no |none|
|» categoria|body|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "id": 3,
  "nome": "Lucas",
  "moderador": false,
  "sexo": "Masculino",
  "categoria": "Amador"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» id|integer|true|none||none|
|» nome|string|true|none||none|
|» moderador|boolean|true|none||none|
|» sexo|string|true|none||none|
|» categoria|string|true|none||none|

## DELETE Deletar jogador

DELETE /jogadores/{id}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|User-Agent|header|string| no |none|

> Response Examples

> 400 Response

```json
{
  "message": "ID inválido. Por favor digite um ID válido"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» message|string|true|none||none|

## PATCH Atualizar estado de moderação do jogador

PATCH /jogadores/{id}/moderador

> Body Parameters

```json
{
  "moderador": true
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|Content-Type|header|string| no |none|
|User-Agent|header|string| no |none|
|body|body|object| no |none|
|» moderador|body|boolean| yes |none|

> Response Examples

> 200 Response

```json
{
  "id": 2,
  "nome": "Natiele",
  "moderador": true,
  "sexo": "Feminino",
  "categoria": "Intermediario"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» id|integer|true|none||none|
|» nome|string|true|none||none|
|» moderador|boolean|true|none||none|
|» sexo|string|true|none||none|
|» categoria|string|true|none||none|

# Partida

## GET Listar partidas

GET /partidas

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string| no |none|

> Response Examples

> 200 Response

```json
[
  {
    "id": 1,
    "tipo": "Amador",
    "data": "2025-09-15T02:19:56.358Z",
    "situacao": "Aberta",
    "moderador": {
      "id_moderador": 1,
      "nome_moderador": "Thalisson"
    },
    "participantes": [
      {
        "id_jogador": 2,
        "nome_jogador": "Natiele"
      },
      {
        "id_jogador": 3,
        "nome_jogador": "Marcos"
      }
    ],
    "inscricoes": [
      {
        "id_inscricao": 1,
        "id_jogador": 3,
        "nome_jogador": "Marcos",
        "status": "aceita",
        "data": "2025-09-15T02:19:56.358Z"
      }
    ],
    "avaliacoes": []
  }
]
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» id|integer|false|none||none|
|» tipo|string|false|none||none|
|» data|string|false|none||none|
|» situacao|string|false|none||none|
|» moderador|object|false|none||none|
|»» id_moderador|integer|true|none||none|
|»» nome_moderador|string|true|none||none|
|» participantes|[object]|false|none||none|
|»» id_jogador|integer|true|none||none|
|»» nome_jogador|string|true|none||none|
|» inscricoes|[object]|false|none||none|
|»» id_inscricao|integer|false|none||none|
|»» id_jogador|integer|false|none||none|
|»» nome_jogador|string|false|none||none|
|»» status|string|false|none||none|
|»» data|string|false|none||none|
|» avaliacoes|[any]|false|none||none|

## POST Criar partida

POST /partidas

> Body Parameters

```json
{
  "tipo": "Federado",
  "nome_moderador": "Thalisson"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string| no |none|
|User-Agent|header|string| no |none|
|body|body|object| no |none|
|» tipo|body|string| yes |none|
|» nome_moderador|body|string| yes |none|

> Response Examples

> 201 Response

```json
{
  "id": 2,
  "tipo": "Federado",
  "data": "2025-09-12T15:43:23.556Z",
  "situacao": "Aberta",
  "moderador": {
    "id_moderador": 1,
    "nome_moderador": "Thalisson"
  },
  "participantes": [
    {}
  ]
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|Inline|

### Responses Data Schema

HTTP Status Code **201**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» id|integer|true|none||none|
|» tipo|string|true|none||none|
|» data|string|true|none||none|
|» situacao|string|true|none||none|
|» moderador|object|true|none||none|
|»» id_moderador|integer|true|none||none|
|»» nome_moderador|string|true|none||none|
|» participantes|[object]|true|none||none|

## POST Criar avaliação da partida

POST /partidas/{id}/avaliacoes

> Body Parameters

```json
{
  "nome_jogador": "Marcos",
  "nota": 10,
  "comentario": "Partida muito boa, ótima organização!"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|Content-Type|header|string| no |none|
|User-Agent|header|string| no |none|
|body|body|object| no |none|
|» nome_jogador|body|string| yes |none|
|» nota|body|integer| yes |none|
|» comentario|body|string| yes |none|

> Response Examples

> 201 Response

```json
{
  "id": 1,
  "id_jogador": 3,
  "nome_jogador": "Marcos",
  "nota": 10,
  "comentario": "Partida muito boa, ótima organização!"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|Inline|

### Responses Data Schema

HTTP Status Code **201**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» id|integer|true|none||none|
|» id_jogador|integer|true|none||none|
|» nome_jogador|string|true|none||none|
|» nota|integer|true|none||none|
|» comentario|string|true|none||none|

## POST Adicionar jogadores na partida

POST /partidas/{id}/participantes

> Body Parameters

```json
{
  "nome_jogador": "Natiele"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|Content-Type|header|string| no |none|
|User-Agent|header|string| no |none|
|body|body|object| no |none|
|» nome_jogador|body|string| yes |none|

> Response Examples

> 400 Response

```json
{
  "message": "O jogador (Natiele) podera ser participar da partida pois não possui a mesma categoria da partida"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **400**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» message|string|true|none||none|

## PATCH Atualizar dados da partida

PATCH /partidas/{id}

> Body Parameters

```json
{
  "situacao": "Fechada"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|Content-Type|header|string| no |none|
|User-Agent|header|string| no |none|
|body|body|object| no |none|
|» situacao|body|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "id": 1,
  "tipo": "Amador",
  "data": "2025-09-12T18:07:18.045Z",
  "situacao": "Fechada",
  "moderador": {
    "id_moderador": 1,
    "nome_moderador": "Thalisson"
  },
  "participantes": []
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» id|integer|true|none||none|
|» tipo|string|true|none||none|
|» data|string|true|none||none|
|» situacao|string|true|none||none|
|» moderador|object|true|none||none|
|»» id_moderador|integer|true|none||none|
|»» nome_moderador|string|true|none||none|
|» participantes|[any]|true|none||none|

## DELETE Deletar partida

DELETE /partidas/{id}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|User-Agent|header|string| no |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

# Data Schema

