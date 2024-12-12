FROM node:18-alpine
RUN npm install -g npm@latest
RUN mkdir -p /var/www/token
WORKDIR /var/www/token
ADD . /var/www/token
RUN npm install
EXPOSE 8002
CMD npm run build && npm run start:prod
