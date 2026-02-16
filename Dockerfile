FROM node:20-slim

# Install Clawdbot globally
RUN npm install -g clawdbot@latest

# Create workspace
WORKDIR /app
RUN mkdir -p /app/workspace

# Copy config files
COPY config.yml /app/config.yml
COPY .env.example /app/.env

# Set environment
ENV CLAWDBOT_CONFIG=/app/config.yml
ENV CLAWDBOT_WORKSPACE=/app/workspace
ENV PORT=10000

# Expose port
EXPOSE 10000

# Start Clawdbot
CMD ["clawdbot", "gateway", "start"]
