const { Server } = require('socket.io');

const http = require('http');
const startSocketServer = require('./socket-server');

const server = http.createServer();
const io = startSocketServer(server);

server.listen(3000, () => {
  console.log(`Server listening on port 3000`);
});


const startSocketServer = (httpServer) => {
  const io = new Server(httpServer, {
    cors: {
      origin: '*',
    },
  });

  io.on('connection', (socket) => {
    console.log(`Client connected with socket id ${socket.id}`);

    // Handle disconnection
    socket.on('disconnect', () => {
      console.log(`Client disconnected with socket id ${socket.id}`);
    });

    // Handle custom events
    socket.on('custom_event', (data) => {
      console.log(`Received custom event with data ${JSON.stringify(data)}`);
      io.emit('custom_event_response', `Received your custom event: ${data}`);
    });
  });

  return io;
}

module.exports = startSocketServer;

// const express = require('express')
// const app = express() 
// const port = 5000 
// const server = app.listen(port)

// const server = require('http').createServer();
// const io = require('socket.io')(server);
// io.on('connection', client => {
//   client.on('event', data => {
//     console.log(data);
//   });
//   client.on('disconnect', () => { 
//     console.log("disconnnect...")
//    });
// });
// server.listen(3000);

// const express = require('express')
// const app = express();
// const port = 5000 // setting the port
// const server = app.listen(port);

// const { Server } = require('socket.io');
// const io = new Server(server, { cors: { origin: '*' } });

// let clients = []
// var Socket = {
//     emit: function (event, data) {
//         console.log(event, data);
//         let socket_id = Array.from(io.sockets.sockets.keys())
//         // io.emit(event, data);      
//         io.to(socket_id).emit(event, data);  
     
//     }
// };

// io.on("connection", function (socket) {
//     console.log("A user connected to socket id", socket.id); 
// });

// console.log(clients)
// exports.Socket = Socket;