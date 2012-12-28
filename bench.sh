
if [ ! -d ./node_modules/connect ] ; then 
  npm install connect
fi

node benchmark.js &

sleep 1

echo "http.createServer() ..."
siege -c 50 -b -t 20S http://127.0.0.1:9890

echo "connect() ..."
siege -c 50 -b -t 20S http://127.0.0.1:9891

echo "connect() with connect-domain ..."
siege -c 50 -b -t 20S http://127.0.0.1:9892

kill %