FROM node:18-alpine
RUN npm install -g npm@latest
RUN mkdir -p /var/www/user
WORKDIR /var/www/user
ADD . /var/www/user
RUN npm install
EXPOSE 8003
CMD npm run build && npm run start:prod
