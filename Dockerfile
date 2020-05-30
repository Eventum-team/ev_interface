FROM node:carbon-slim
WORKDIR /ev-interface

COPY package*.json /ev-interface/
RUN npm install

COPY . /ev-interface/


EXPOSE 3000
EXPOSE 8001

CMD ["npm", "start"]