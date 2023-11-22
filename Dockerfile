FROM node:18-alpine

WORKDIR /app

ARG NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
ENV NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="dv6keahg3"

COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3050
RUN npm run build
CMD npm run start