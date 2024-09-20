FROM node:18-alpine

RUN corepack enable
RUN corepack prepare pnpm@9.11.0 --activate

WORKDIR /app

COPY package*.json ./
RUN pnpm install
COPY . .
RUN pnpm build
EXPOSE 3050
CMD pnpm start