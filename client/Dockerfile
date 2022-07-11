FROM node:18-alpine3.15

RUN mkdir -p /app
WORKDIR /app

COPY package.json /app

COPY . /app

RUN yarn install

CMD ["yarn", "start"]