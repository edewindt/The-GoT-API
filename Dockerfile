FROM node:16-alpine

WORKDIR /app

COPY . .

RUN npm config set legacy-peer-deps true

RUN npm install

EXPOSE 8000

CMD ["node", "server.js"]