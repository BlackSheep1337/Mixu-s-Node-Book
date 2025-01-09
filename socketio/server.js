const fs = require('node:fs');
const server = require('node:http').createServer(setHeader);
const io = require('socket.io')(server);

function setHeader(req, res) {
  res.writeHead(200, { 'content-type': 'text/html' });
  res.end(fs.readFileSync('./index.html'));
}

server.listen(8000, function () {
  console.log('Server listening at http://localhost:8000/');
});

const messages = [];

io.on('connection', function (socket) {
  socket.on('message', function (msg) {
    console.log('Received:', msg);
    messages.push(msg);
    socket.broadcast.emit('message', msg);
  });

  messages.forEach(function (msg) {
    socket.send(msg);
  });
});
