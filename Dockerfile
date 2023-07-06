# FROM node:16-alpine AS builder
# WORKDIR /build
# COPY package*.json ./
# RUN npm ci
# COPY tsconfig*.json ./
# COPY src src
# COPY prisma ./prisma/
# RUN npm run build

# FROM node:16-alpine
# RUN apk add --no-cache tini
# WORKDIR /app
# COPY package*.json ./
# ENV DATABASE_URL="postgresql://postgres:mypassword@localhost:5432/db?schema=public"
# RUN npm install
# COPY --from=builder /build/dist dist
# EXPOSE 3000
# ENTRYPOINT [ "/sbin/tini","--", "node", "dist/src/server/index.js" ]

FROM node:18.15.0 AS builder

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/

RUN npm install
COPY . .
RUN npm run build
FROM node:18.15.0

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist

EXPOSE 3000
CMD [ "npm", "run", "start" ]