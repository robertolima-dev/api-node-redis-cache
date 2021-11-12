#!/bin/bash

npm install
echo "  ===>> instalando dependências"
npm run db:migrate
echo "  ===>> rodando migrations"
npm run dev
echo "  ===>> iniciando a aplicação"
