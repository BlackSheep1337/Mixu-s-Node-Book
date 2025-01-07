const fs = require('node:fs');

// const fileData = 'data to the file';
// const arrayData = ['hello', 'world']

// const data = fs.readFileSync('./index.html', 'utf8');
// console.log(data);

// fs.readFile('./index.html', 'utf8', function (err, data) {
//   console.log(data);
// });

// fs.writeFile('example.txt', fileData, function (err, data) {
//   if (err) throw err;
//   console.log('File write completed');
// });

// fs.open('./index.html', 'w', function (err, fd) {
//   if (err) throw err;
//   const buff =  Buffer.from('bbbbbbb\n');
//   fs.write(fd, buff, 0, buff.length, null, function (err, written, buffer) {
//     if (err) throw err;
//     console.log(err, written, buffer);
//     fs.close(fd, function () {
//       console.log('Done');
//     });
//   });
// });

// fs.open('./data/index.html', 'r', function (err, fd) {
//   if (err) throw err;
//   const buf = Buffer.from('3');
//   fs.read(fd, buf, 0, buf.length, null, function (err, bytesRead, buffer) {
//     if (err) throw err;
//     console.log(err, bytesRead, buffer);
//     fs.close(fd, function () {
//       console.log('Done');
//     });
//   });
// });

// const path = './data/';
// fs.readdir(path, function (err, files) {
//   if (err) throw err;
//   files.forEach(function (file) {
//     console.log(path + file);
//     fs.stat(path + file, function (err, stats) {
//       console.log(stats);
//     })
//   });
// });

// const pathExists = fs.existsSync(path);

// console.log(pathExists);

// fs.mkdir('./newdir', '0666', function (err) {
//   if (err) throw err;
//   console.log('Created newdir');
//   fs.rmdir('./newdir', function (err) {
//     if (err) throw err;
//     console.log('Removed newdir');
//   });
// })

const file = fs.createReadStream('./data/results.txt', { flags: 'r' });
const out = fs.createWriteStream('./data/results2.txt', { flags: 'w' });

file.on('data', function (data) {
  console.log('data', data);
  out.write(data);
});

file.on('end', function () {
  console.log('end');
  out.end(function () {
    console.log('Finished writing to a file');
  });
});
