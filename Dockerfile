# Step 1: Build the React app
FROM node:18 AS build

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the entire project and build it
COPY . .
RUN npm run build

# Step 2: Serve the build using Nginx
FROM nginx:stable-alpine

# Copy built files from the previous stage to nginx's web directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
