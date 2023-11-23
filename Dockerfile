FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name npm run build
EXPOSE 3050
CMD npm run start