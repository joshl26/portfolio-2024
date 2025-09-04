FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies with npm
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Expose port
EXPOSE 3050

# Disable Next.js telemetry
RUN npx next telemetry disable

# Start the application
CMD ["npm", "start"]