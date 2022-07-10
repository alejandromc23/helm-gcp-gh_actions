#------------------------------------
# Base image
#------------------------------------

FROM node:16-alpine AS base
WORKDIR /usr/app

ARG ENV_FILE_PATH
ENV ENV_FILE_PATH $ENV_FILE_PATH
ADD $ENV_FILE_PATH /

RUN apk add --no-cache bash

#------------------------------------
# Build image
#------------------------------------
FROM base AS build
WORKDIR /usr/app

COPY package.json .
COPY yarn.lock .

RUN yarn install

EXPOSE $PORT

COPY . .
RUN export $(cat "/$ENV_FILE_PATH" | xargs) && yarn build

#------------------------------------
# Final image
#------------------------------------
FROM base AS prod
WORKDIR /usr/app

COPY package.json .
COPY yarn.lock .

RUN yarn install --production

COPY --from=build /usr/app/start.sh start.sh
COPY --from=build /usr/app/dist dist

EXPOSE $PORT

ENTRYPOINT ["sh", "./start.sh"]