# Deploy on Nginx
FROM nginx:1.17.8-alpine
COPY websites/hopr-swiss/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]