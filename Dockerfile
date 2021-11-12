FROM node:16.13.0-alpine3.12

WORKDIR /home/node/app

COPY /package*.json ./
COPY tsconfig.json ./
COPY package-lock.json ./
RUN npm i -g npm@8.1.0
RUN apk add --no-cache bash

COPY . .

EXPOSE 4001 3001
