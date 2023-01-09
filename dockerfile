FROM nginx
COPY /nginx.conf /etc/nginx/conf.d/default.conf
COPY dist/untitled/ /usr/share/nginx/html
