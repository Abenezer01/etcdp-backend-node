// const express = require("express");
// const app = express();
// const port = 5200; // setting the port
// const server = app.listen(port);

// const { Server } = require("socket.io");
// const io = new Server(server, { cors: { origin: "*" } });

// let clients = [];
// var Socket = {
//   emit: function (event, data) {
//     let socket_id = Array.from(io.sockets.sockets.keys());
//     // io.emit(event, data);
//     io.to(socket_id).emit(event, data);
//   },
// };

// io.on("connection", function (socket) {
//   console.log("A user connected to socket id", socket.id);
// });

// console.log(clients);
// exports.Socket = Socket;


const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.SOCKET_PORT;

const server = app.listen(port);
// const usrData = require("../../utils/userDataFromToken");

const { Server } = require("socket.io");
const io = new Server(server, { cors: { origin: "*" } });

let userSocketMap = {};

const Socket = {
  emitToUser: function (event, data, userId) {
    console.log("A user connected to socket id", userId);
    const socketId = userSocketMap[userId];
    if (socketId) {
      io.to(socketId).emit(event, data);
    }
  },
};

io.on("connection", function (socket) {
  console.log("A user connected to socket id", socket.id);

  // Assuming you get the user ID from the handshake query or any other method
  const userId = socket.handshake.query.userId;

  // Map the user ID to the socket ID
  userSocketMap[userId] = socket.id;

  socket.on("disconnect", () => {
    console.log("User disconnected", socket.id);
    // Remove the user from the map when they disconnect
    delete userSocketMap[userId];
  });
});

console.log("Server running on port", port);
exports.Socket = Socket;
