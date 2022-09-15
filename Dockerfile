FROM node:16-alpine
LABEL maintainer="Malik Bagwala<malik.bagwala@vesatogo.com>"
WORKDIR /app

COPY . .

RUN yarn install --frozen-lockfile

ENV NODE_ENV production

RUN yarn build

EXPOSE 3000

CMD [ "yarn","serve" ]