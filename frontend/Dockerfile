ARG NODE_VERSION=22.5.0

FROM node:${NODE_VERSION} as build

WORKDIR /app

ENV PORT=5173

RUN curl -fsSL https://bun.sh/install | bash

ENV PATH="/root/.bun/bin:${PATH}"

COPY package*.json bun.lockb ./

RUN rm -rf /app/node_modules/

RUN ["bun", "install"]

COPY . .

RUN ["bun", "run", "build"]

FROM nginx:stable-alpine

COPY --from=build /app/dist /app/usr/share/nginx/html
COPY --from=build /app/nginx.conf /app/etc/nginx/conf.d/default.conf

EXPOSE $PORT

CMD ["nginx", "-g", "daemon off;"]
