FROM node:18-alpine
RUN npm install -g npm@latest
RUN mkdir -p /var/www/task
WORKDIR /var/www/task
ADD . /var/www/task
RUN npm install
EXPOSE 8001
CMD npm run build && npm run start:prod
