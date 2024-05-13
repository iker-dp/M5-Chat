const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', function connection(ws) {
  console.log('A new client connected');

  ws.on('message', function incoming(message) {
    console.log('Received: %s', message);
    
    // Enviar el mensaje recibido a todos los clientes conectados
    wss.clients.forEach(function each(client) {
      client.send(message);
    });
  });
});

server.listen(3000, function listening() {
  console.log('Server is listening on port 3000');
});

app.use(express.static('./view'));
