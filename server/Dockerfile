FROM node:lts

RUN mkdir -p /usr/src/server
WORKDIR /usr/src/server

COPY yarn.lock package.json ./

RUN yarn install --frozen-lockfile

COPY . .

CMD ["yarn", "dev"]
