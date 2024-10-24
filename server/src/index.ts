import { Socket, Server } from "socket.io";




const io = new Server(3000)


io.on('connection', (socket: Socket) => {
	console.log("we are connected to socket ", socket.id)
});


