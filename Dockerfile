FROM node:14.8.0-slim

EXPOSE 3000

COPY . /app/

WORKDIR /app/

RUN yarn install
CMD yarn start