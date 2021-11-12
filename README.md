# API Restful com Node.js, Express, Typescript, Sequelize e Redis

Node versão 16.13.0

## Apresentação do REDIS

Redis é um armazenamento de estrutura de dados com chave valor.

Os principais casos de uso do Redis incluem cache, gerenciamento de sessões, PUB/SUB e classificações

## Rodando a aplicação localmente

Clone o projeto:

```
$ git clone git@github.com:robertolima-dev/api-redis.git
```

Configure o arquivo .env utilizando o exemplo .env.example:

```
$ cd api-redis

$ npm install

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

