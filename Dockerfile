FROM node:14.8.0-slim

WORKDIR /app

EXPOSE 3000

COPY . /app/

RUN yarn install

CMD ["yarn", "start"]
