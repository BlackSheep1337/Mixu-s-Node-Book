const fs = require('node:fs');

const data = fs.readFileSync('./index.html', 'utf8');
console.log(data);

fs.readFile('./index.html', 'utf8', function (err, data) {
  console.log(data);
});