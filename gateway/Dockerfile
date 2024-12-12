FROM node:18-alpine
RUN npm install -g npm@latest
RUN mkdir -p /var/www/gateway
WORKDIR /var/www/gateway
ADD . /var/www/gateway
RUN npm install
EXPOSE 8000
CMD npm run build && npm run start:prod
