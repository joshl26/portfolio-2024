FROM node:18-alpine

WORKDIR /app

ARG CLOUDINARY_CLOUD_NAME=""



COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3050
CMD npm run start