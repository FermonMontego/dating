ARG NODE_VERSION=22.5.0

FROM node:${NODE_VERSION}

WORKDIR /app

ENV PORT=5173

RUN curl -fsSL https://bun.sh/install | bash

ENV PATH="/root/.bun/bin:${PATH}"

COPY package*.json bun.lockb ./

RUN ["bun", "install"]

COPY . .

EXPOSE $PORT

CMD ["bun", "run", "serve"]
