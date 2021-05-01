FROM node:lts-alpine as builder
COPY package*.json ./
RUN npm install --no-optional
COPY . .
RUN npm run build

FROM martinheinz/nginx-brotli as runner
COPY --from=builder dist /home/html
COPY site.conf brotli.conf prod.template /etc/nginx/conf.d/
COPY nginx.conf .htpasswd /etc/nginx/
EXPOSE 8008
COPY startup.sh /home/
RUN chmod 777 /home/startup.sh
CMD ["sh", "/home/startup.sh"]

# docker build -t martinheinz/blog_frontend .
# docker run --name blog-frontend -p 8080:8080 --rm martinheinz/blog_frontend
