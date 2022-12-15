# syntax=docker/dockerfile:1
FROM node:12-alpine as base

WORKDIR /server

COPY package.json package.json
COPY package-lock.json package-lock.json

FROM base as dev
RUN npm ci 
COPY . .
ENV DATABASE_URL=mongodb://mongo:27017/data
ENV JWT_SECRET=development_secret
CMD [ "npm", "run", "dev" ]
