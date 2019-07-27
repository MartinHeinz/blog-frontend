FROM node:lts-alpine as builder
COPY package*.json ./
RUN npm install --no-optional
COPY . .
RUN npm run build

FROM nginx:stable-alpine as runner
COPY --from=builder dist /home/html
COPY site.conf prod.template /etc/nginx/conf.d/
COPY .htpasswd /etc/nginx/.htpasswd
EXPOSE 80
COPY startup.sh /home/
RUN chmod 777 /home/startup.sh
CMD ["sh", "/home/startup.sh"]

# docker build -t martinheinz/blog_frontend .
# docker run -p 8080:8080 --rm martinheinz/blog_frontend
