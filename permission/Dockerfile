FROM node:18-alpine
RUN npm install -g npm@latest
RUN mkdir -p /var/www/permission
WORKDIR /var/www/permission
ADD . /var/www/permission
RUN npm install
EXPOSE 8005
CMD npm run build && npm run start:prod
