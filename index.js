const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);


const {Server} = require("socket.io");
const io = new Server(server);

io.on('connection', (socket)=>{
    console.log("Un usuario se a conectado al chat");

    socket.on('chat message', (msg)=>{
    //Mensaje recibido

    //emite mensaje recibido en el ser
       io.emit('chat message',msg);



        console.log("El menssaje fue : " +   msg);
    });

    socket.on("disconnect", ()=>{
        console.log("El usurio se desconecto");
    })
});

app.get("/", (seq, res) => {
    res.sendFile(__dirname+ "/templates/index.html");
});

app.get("/script/socket-conect.js", (seq, res) => {
    res.sendFile(__dirname+ "/script/socket-conect.js");
});

app.get("/css/socket-form.css", (seq, res) => {
    res.sendFile(__dirname+ "/css/socket-form.css");
});

server.listen(8080, ()=> {
    console.log("Escuchando el puerto 8080");
});