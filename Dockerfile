# Build stage
FROM node:20-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine

# Make sure the folder exists
RUN mkdir -p /usr/share/nginx/html/fingmap

# Copy built files to /fingmap
COPY --from=builder /app/dist /usr/share/nginx/html/fingmap

# Copy your custom Nginx config
COPY fingmap.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]