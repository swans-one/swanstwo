FROM nginx

COPY config/nginx/nginx.conf /etc/nginx/nginx.conf
COPY config/nginx/conf.d/* /etc/nginx/conf.d

COPY static /usr/share/nginx
