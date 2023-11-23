FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN CLOUDINARY_CLOUD_NAME="something" npm run build
EXPOSE 3050
CMD npm run start