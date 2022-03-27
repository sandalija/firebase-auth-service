FROM node:16

# Application directory
WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .

RUN yarn

COPY . . 
RUN yarn build


EXPOSE 8080
CMD [ "node", "dist/server.js"]




