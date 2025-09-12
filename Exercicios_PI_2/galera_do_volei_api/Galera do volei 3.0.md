---
title: Galera do vôlei 2.0
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: true
code_clipboard: true
highlight_theme: darkula
headingLevel: 2
generator: "@tarslib/widdershins v4.0.30"

---

# Galera do vôlei 2.0

Base URLs: http://localhost:3333

# Authentication

# Convite

## DELETE /convites/{id}

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

## POST /convites

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

## GET /convites

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
    "status": false,
    "remetente": {
      "id_remetente": 1,
      "nome_remetente": "Thalisson"
    },
    "destinatario": {
      "id_destinatario": 2,
      "nome_destinatario": "Natiele"
    },
    "id_partida": 1
  },
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
|» status|boolean|true|none||none|
|» remetente|object|true|none||none|
|»» id_remetente|integer|true|none||none|
|»» nome_remetente|string|true|none||none|
|» destinatario|object|true|none||none|
|»» id_destinatario|integer|true|none||none|
|»» nome_destinatario|string|true|none||none|
|» id_partida|integer|true|none||none|

# Partida

## PATCH /partidas/{id}

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

## DELETE /partidas/{id}

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

## POST /partidas/{id}/participantes

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

## POST /partidas

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

## GET /partidas

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
    "data": "2025-09-12T18:24:50.361Z",
    "situacao": "Aberta",
    "moderador": {
      "id_moderador": 1,
      "nome_moderador": "Thalisson"
    },
    "participantes": [
      {
        "id_jogador": 2,
        "nome_jogador": "Lucas"
      }
    ]
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
|»» id_jogador|integer|false|none||none|
|»» nome_jogador|string|false|none||none|

# Jogador

## PATCH /jogadores/{id}/moderador

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

## PATCH /jogadores/{id}

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

## DELETE /jogadores/{id}

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

## GET /jogadores

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
    "nome": "Lucas",
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

## POST /jogadores

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
  "id": 3,
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

# Data Schema

