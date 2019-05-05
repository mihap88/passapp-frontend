FROM node:latest

RUN mkdir /usr/src/pass-app
WORKDIR /usr/src/pass-app

ENV PATH /usr/src/pass-app/node_modules/.bin:$PATH
COPY src/ /usr/src/pass-app/src/
COPY public/ /usr/src/pass-app/public/
COPY package.json /usr/src/pass-app/package.json

RUN npm install
RUN npm install -g serve
RUN npm run build

CMD ["serve", "-s", "build"]