# Deps stage
FROM node:lts-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
# RUN ./node_modules/.bin/prisma db push
RUN npm run build
RUN npm ci --production
EXPOSE 3000
CMD [ "npm", "run", "start:server" ]