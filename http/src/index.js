// const http = require('node:http');

// const options = {
//   host: 'www.google.com',
//   port: 80,
//   path: '/'
// };

// const req = http.get(options, function (resposne) {
//   let res_data = '';

//   resposne.on('data', function (chunk) {
//     res_data += chunk;
//   });

//   resposne.on('end', function () {
//     console.log(res_data);
//   });

//   resposne.on('error', function (e) {
//     console.log('error:', e.message);
//   });
// });

// console.log(http.STATUS_CODES['404']);

// HTTPS
var https = require('https');
var fs = require('node:fs');
// read in the private key and certificate
var pk = fs.readFileSync('./privatekey.pem');
var pc = fs.readFileSync('./certificate.pem');
var opts = { key: pk, cert: pc };
// create the secure server
var serv = https.createServer(opts, function(req, res) {
  console.log(req);
  res.end();
});
// listen on port 443
serv.listen(3000);