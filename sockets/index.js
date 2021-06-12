const io = require('socket.io')(8900, {
    cors: {
        origin: "http://localhost:3000",
    },
});
const jwt = require('jwt-then');
const path = require('path')
require('dotenv').config({ path: '../backend/' })



let onlineUsers = [];

const addUser = (userId, socketId) => {
    !onlineUsers.some((user) => user.userId === userId) &&
        onlineUsers.push({ userId, socketId });
};

const removeUser = (socketId) => {
    onlineUsers = onlineUsers.filter((user) => user.socketId !== socketId);
}

const getUser = (userId) => {
    return onlineUsers.find((user) => user.userId === userId);
};


io.use(async(socket, next) => {
        try {
            const token = socket.handshake.query.token;
            const payload = await jwt.verify(token, process.env.SECRET);
            socket.userId = payload.id;
            next();
        } catch (err) {}
    })
    .on("connection", (socket) => {
        //when ceonnect
        console.log("a user connected.");

        //take userId and socketId from user
        socket.on("addUser", (userId) => {
            addUser(userId, socket.id);
            io.emit("getUsers", users);
        });

        //send and get message
        socket.on("sendMessage", ({ senderId, receiverId, text }) => {
            const user = getUser(receiverId);
            io.to(user.socketId).emit("getMessage", {
                senderId,
                text,
            });
        });

        //when disconnect
        socket.on("disconnect", () => {
            console.log("a user disconnected!");
            removeUser(socket.id);
            io.emit("getUsers", users);
        });
    });