FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN pnpm install
COPY . .
RUN pnpm run build
EXPOSE 3050
CMD pnpm run start