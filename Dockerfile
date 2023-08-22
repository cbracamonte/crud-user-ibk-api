# Stage 1: Build
FROM node:16-alpine AS build
WORKDIR /usr/src/api
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
RUN npm run start