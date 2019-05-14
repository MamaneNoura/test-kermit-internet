const express = require('express')
const app = express();
const port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
const ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

app.listen(port, ip, err => {
  if (err) throw err;
  console.log('server running on ' + ip + ' ' + port);
});
