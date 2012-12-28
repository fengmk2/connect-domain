# benchmark result

```bash
$ sh bench.sh 

http.createServer() ...
** SIEGE 2.72
** Preparing 50 concurrent users for battle.
The server is now under siege...
Lifting the server siege...      done.

Transactions:         160152 hits
Availability:         100.00 %
Elapsed time:          19.31 secs
Data transferred:         1.68 MB
Response time:            0.01 secs
Transaction rate:      8293.73 trans/sec
Throughput:           0.09 MB/sec
Concurrency:           49.89
Successful transactions:      160152
Failed transactions:             0
Longest transaction:          0.06
Shortest transaction:         0.00
 
connect() ...
** SIEGE 2.72
** Preparing 50 concurrent users for battle.
The server is now under siege...
Lifting the server siege...      done.

Transactions:         143019 hits
Availability:         100.00 %
Elapsed time:          19.98 secs
Data transferred:         1.50 MB
Response time:            0.01 secs
Transaction rate:      7158.11 trans/sec
Throughput:           0.08 MB/sec
Concurrency:           49.92
Successful transactions:      143019
Failed transactions:             0
Longest transaction:          0.09
Shortest transaction:         0.00
 
connect() with connect-domain ...
** SIEGE 2.72
** Preparing 50 concurrent users for battle.
The server is now under siege...
Lifting the server siege...      done.

Transactions:         122444 hits
Availability:         100.00 %
Elapsed time:          19.98 secs
Data transferred:         1.28 MB
Response time:            0.01 secs
Transaction rate:      6128.33 trans/sec
Throughput:           0.06 MB/sec
Concurrency:           49.89
Successful transactions:      122444
Failed transactions:             0
Longest transaction:          0.10
Shortest transaction:         0.00
```