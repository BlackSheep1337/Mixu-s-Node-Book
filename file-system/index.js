const fs = require('node:fs');

const fileData = 'data to the file';
const arrayData = ['hello', 'world']

// const data = fs.readFileSync('./index.html', 'utf8');
// console.log(data);

// fs.readFile('./index.html', 'utf8', function (err, data) {
//   console.log(data);
// });

fs.writeFile('example.txt', fileData, function (err, data) {
  if (err) throw err;
  console.log('File write completed');
});