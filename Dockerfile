FROM node:16

WORKDIR /usr/app

COPY . /usr/app/

RUN npm install

EXPOSE 80

CMD ["npm", "start"]
