# API Restful com Node.js, Express, Typescript, Sequelize e Redis

Node versão 16.13.0

## REDIS

Redis é um banco de dados NoSQL de código aberto que pode ser usado como um sistema de cache. Ele oferece alta performance, escalabilidade e flexibilidade para armazenar e recuperar dados de forma rápida. Ele também pode ser usado para armazenar dados estruturados, como listas, conjuntos e hashes. Redis é muito útil para aplicações que precisam de acesso rápido aos dados, como sites de comércio eletrônico, jogos online e sistemas de mensagens.

## Benefícios de usar REDIS

- Alto desempenho: Redis é extremamente rápido e pode processar milhares de solicitações por segundo.
- Escalabilidade: Redis pode ser facilmente escalado para atender às necessidades de carga de trabalho.
- Flexibilidade: Redis suporta vários tipos de dados, como listas, conjuntos e hashes.
- Segurança: Redis oferece recursos de segurança para proteger os dados armazenados.

## Rodando a aplicação localmente

Clone o projeto:

```
$ git clone git@github.com:robertolima-dev/api-node-redis-cache.git
```

Configure o arquivo .env utilizando o exemplo .env.example:

```
$ cd api-node-redis-cache

$ npm install
```

Crie um arquivo .env e adicione as credenciais de seu MySQL local


```
$ npm run db:migrate
```

Inicie o Redis com o comando docker abaixo:

```
docker run --name redis -p 6379:6379 -d -t redis:alpine
```

Inicie o RedisInsight com o comando docker abaixo:

```
docker run --name redis-client -v redisinsight:/db -p 8001:8001 -d -t redislabs/redisinsight:latest
```

Inicie a aplicação:

```
$ npm run dev
```

`http://localhost:4001`.

