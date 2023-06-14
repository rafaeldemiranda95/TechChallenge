FROM node:16-alpine AS builder
WORKDIR /build
COPY package*.json ./
RUN npm ci
COPY tsconfig*.json ./
COPY src src
RUN npm run build

FROM node:16-alpine
RUN apk add --no-cache tini
WORKDIR /app
COPY package*.json ./
ENV NODE_ENV=production
RUN npm install
COPY --from=builder /build/dist dist
EXPOSE 3000
ENTRYPOINT [ "/sbin/tini","--", "node", "dist//adapter/driver/program.js" ]