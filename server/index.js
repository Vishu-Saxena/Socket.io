import express from "express";
import { Server } from "socket.io";
import {createServer} from "http";


const app = express();


app.get('/' , (req , res)=>{
    res.send("hello socket.io")
})

const server = createServer(app);

// creating cercuite
const io= new Server(server , {
    cors : {
        origin : "http://localhost:3001",
        methods : ["GET" , "POST"],
        credentials : true
    }
});
io.on("connection" , (socket)=>{
    console.log("user connected");
    console.log("Id" , socket.id);
})


const PORT = 3000;

server.listen(PORT , ()=>{console.log("server running on port 3000");})
