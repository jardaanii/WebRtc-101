"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_1 = require("socket.io");
const io = new socket_io_1.Server(3000);
io.on('connection', (socket) => {
    console.log("we are connected to socket ", socket.id);
});
