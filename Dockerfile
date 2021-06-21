FROM node:latest

EXPOSE 8000

RUN npm install -g gatsby-cli

COPY ./app ./app
WORKDIR /app

RUN yarn install && yarn cache clean

CMD ["yarn", "develop", "-H", "0.0.0.0", "-p", "8000"]