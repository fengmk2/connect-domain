/*!
 * connect-domain - benchmark.js
 * Copyright(c) 2012 fengmk2 <fengmk2@gmail.com>
 * MIT Licensed
 */

"use strict";

/**
 * Module dependencies.
 */

var connectDomain = require('./');
var connect = require('connect');
var http = require('http');

var helloworld = function (req, res, next) {
  req.on('end', function () {
    res.end('Hello world');
  });
};

var app1 = http.createServer(helloworld);
var app2 = connect(helloworld);
var app3 = connect(connectDomain(), helloworld);

app1.listen(9890);
app2.listen(9891);
app3.listen(9892);

/*
siege -c 50 -b -t 20S http://127.0.0.1:9890
siege -c 50 -b -t 20S http://127.0.0.1:9891
siege -c 50 -b -t 20S http://127.0.0.1:9892
 */

/*

My 

mk2@~/git/connect-domain (benchmark) $ siege -c 50 -b -t 20S http://127.0.0.1:9890
** SIEGE 2.72
** Preparing 50 concurrent users for battle.
The server is now under siege...
Lifting the server siege...      done.

Transactions:         163921 hits
Availability:         100.00 %
Elapsed time:          19.60 secs
Data transferred:         1.72 MB
Response time:            0.01 secs
Transaction rate:      8363.32 trans/sec
Throughput:           0.09 MB/sec
Concurrency:           49.89
Successful transactions:      163921
Failed transactions:             0
Longest transaction:          0.09
Shortest transaction:         0.00
 
mk2@~/git/connect-domain (benchmark) $ siege -c 50 -b -t 20S http://127.0.0.1:9891
** SIEGE 2.72
** Preparing 50 concurrent users for battle.
The server is now under siege...
Lifting the server siege...      done.

Transactions:         140274 hits
Availability:         100.00 %
Elapsed time:          19.72 secs
Data transferred:         1.47 MB
Response time:            0.01 secs
Transaction rate:      7113.29 trans/sec
Throughput:           0.07 MB/sec
Concurrency:           49.90
Successful transactions:      140274
Failed transactions:             0
Longest transaction:          0.11
Shortest transaction:         0.00
 
mk2@~/git/connect-domain (benchmark) $ siege -c 50 -b -t 20S http://127.0.0.1:9892
** SIEGE 2.72
** Preparing 50 concurrent users for battle.
The server is now under siege...
Lifting the server siege...      done.

Transactions:         120430 hits
Availability:         100.00 %
Elapsed time:          19.08 secs
Data transferred:         1.26 MB
Response time:            0.01 secs
Transaction rate:      6311.84 trans/sec
Throughput:           0.07 MB/sec
Concurrency:           49.94
Successful transactions:      120430
Failed transactions:             0
Longest transaction:          0.08
Shortest transaction:         0.00

 */