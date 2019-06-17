FROM node:8.16.0-alpine

RUN mkdir -p /home/node/coop-nm-suppliers-api/node_modules && chown -R node:node /home/node/coop-nm-suppliers-api

WORKDIR /home/node/coop-nm-suppliers-api

COPY package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 4001

CMD [ "node", "server.js" ]
