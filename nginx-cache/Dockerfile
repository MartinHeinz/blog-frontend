FROM martinheinz/nginx-brotli as runner
COPY brotli.conf cache.template /etc/nginx/conf.d/
COPY nginx.conf /etc/nginx/
EXPOSE 80
COPY startup.sh /home/
RUN chmod 777 /home/startup.sh
CMD ["sh", "/home/startup.sh"]

# docker build -t martinheinz/blog_cache -f nginx-cache/Dockerfile ./nginx-cache