ARG NODE_VERSION=22.5.0

FROM node:${NODE_VERSION}

WORKDIR /app

ENV PORT=8081

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE $PORT

CMD ["npm", "run", "start:demon"]

