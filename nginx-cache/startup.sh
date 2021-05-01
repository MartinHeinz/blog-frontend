rm /etc/nginx/conf.d/default.conf
# Start Nginx with special option in order to run in foreground
if [ "$PROD" -eq 1 ]; then
    echo "Setting Nginx configuration for Production Environment..."
    sh -c "envsubst '\$NGINX_HOST' < /etc/nginx/conf.d/cache.template > /etc/nginx/conf.d/site.conf"
fi

nginx -g "daemon off;"
