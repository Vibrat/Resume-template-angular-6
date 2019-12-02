FROM php:7.0-apache as base
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
RUN apt-get update && apt-get install -y nodejs

WORKDIR /app/

COPY ./ /app/

RUN npm install
RUN npm rebuild node-sass
RUN npm run build
RUN cp -r dist/resume/* /var/www/html

EXPOSE ${PORT}
RUN sed -i "s/80/$PORT/g" /etc/apache2/sites-enabled/000-default.conf
RUN service apache2 restart
WORKDIR /var/www/html
