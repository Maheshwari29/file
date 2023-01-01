FROM node:7
WORKDIR /add
COPY pakage.json /add
RUN npm install
COPY . /app
CMD node server.js
EXPOSE 4000