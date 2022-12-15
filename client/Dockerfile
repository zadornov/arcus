# syntax=docker/dockerfile:1
FROM node:12-alpine as base
WORKDIR /client

COPY package.json package.json
COPY package-lock.json package-lock.json

FROM base as test
RUN npm ci
COPY . .
CMD [ "npm", "run", "test" ]

FROM base as dev
RUN npm ci 
COPY . .
ENV NODE_ENV=development
CMD [ "npm", "start" ]
