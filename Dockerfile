FROM node:19.2-alpine as dependencies
WORKDIR /app
COPY package.json ./
RUN npm install

FROM node:19.2-alpine as builder
WORKDIR /app
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .
RUN npm run test

FROM node:19.2-alpine as prod-dependencies
WORKDIR /app
COPY package.json ./
RUN npm install --prod

FROM node:19.2-alpine as runner
EXPOSE 3000
ENV MONGO_USERNAME=${MONGO_USERNAME}
ENV MONGO_PASSWORD=${MONGO_PASSWORD}
ENV MONGO_DB_NAME=${MONGO_DB_NAME}
ENV JWT_SECRET=${JWT_SECRET}
ENV SALT_ROUNDS=${SALT_ROUNDS}
WORKDIR /app
COPY --from=prod-dependencies /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
CMD [ "node", "dist/main.js" ]