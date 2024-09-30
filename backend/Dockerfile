ARG NODE_VERSION=22.5.0

FROM node:${NODE_VERSION} as build

WORKDIR /app

ENV PORT=8081

RUN curl -fsSL https://bun.sh/install | bash

ENV PATH="/root/.bun/bin:${PATH}"

COPY package*.json bun.lockb ./

RUN rm -rf /app/node_modules/

RUN ["bun", "install"]

COPY . .

EXPOSE $PORT

CMD ["bun", "run", "start:demon"]

