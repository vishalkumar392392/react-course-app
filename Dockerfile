# Use Node.js as the base image for building the React app
FROM node:alpine as builder

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json to the container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the entire application to the container
COPY . .

# Build the React app for production
RUN npm run build

# Use a lightweight Node.js image for serving the React app
FROM node:alpine

# Set the working directory for the final image
WORKDIR /app

# Copy the production-ready build files from the builder stage
COPY --from=builder /app/build ./build

# Install a simple HTTP server for serving the React app
RUN npm install -g serve

# Expose the port that the server will use
EXPOSE 5000

# Define the command to start the server serving the React app
CMD ["serve", "-s", "build", "-l", "5000"]
