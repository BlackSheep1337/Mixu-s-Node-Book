const fs = require('node:fs');
const PathInterator = require('./pathinterator.js');

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

// const file = fs.createReadStream('./data/results.txt', { flags: 'r' });
// const out = fs.createWriteStream('./data/results2.txt', { flags: 'w' });

// file.on('data', function (data) {
//   console.log('data', data);
//   out.write(data);
// });

// file.on('end', function () {
//   console.log('end');
//   out.end(function () {
//     console.log('Finished writing to a file');
//   });
// });

// file.pipe(out);

// const file = fs.createWriteStream('./data/results.txt', { flags: 'a' });

// file.write('HELLO!\n');
// file.end(function () {
//   console.log('done');
// });

// function findFile(path, searchFile, callback) {
//   fs.readdir(path, function (err, files) {
//     if (err) { return callback(err); }
//     files.forEach(function (file) {
//       fs.stat(path + '/' + file, function () {
//         if (err) { return callback(err); }
//         if (file === searchFile) {
//           callback(undefined, path + '/' + file);
//         } else {
//           findFile(path + '/' + file, searchFile, callback);
//         }
//       });
//     });
//   });
// }

// function findFile(path, searchFile, callback) {
//   function isMatch(err, stats) {
//     if (err) { return callback(err); }
//     if (stats.isFile()) {
//       callback(undefined, path + '/' + searchFile);
//     } else if (stats.isDirectory()) {
//       statDirectory(path + '/' + searchFile, isMatch);
//     }
//   }
//   statDirectory(path, isMatch);
// }

// function statDirectory(path, callback) {
//   fs.readdir(path, function (err, files) {
//     if (err) { return callback(err); }
//     files.forEach(function (file) {
//       fs.stat(path + '/' + file, callback);
//     });
//   });
// }



function findFile(path, searchFile, callback) {
  const pi = new PathInterator();
  pi.on('file', function (file, stats) {
    if (file === searchFile) {
      callback(undefined, file);
    }
  });
  pi.on('error', callback);
  pi.interate(path);
}

findFile('./test', 'needle.txt', function (err, path) {
  if (err) { throw err; }
  console.log('Found file at: ' + path);
});