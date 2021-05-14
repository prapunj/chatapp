const path = require('path')
const http = require('http')
const express = require('express')
const socketIO = require('socket.io')

const publicPath = path.join(__dirname + '/../public')

let app = express()
let server = http.createServer(app)
let io = socketIO(server)

io.on('connection',(socket)=>{
    console.log("A new user just connected!!")

    socket.on('disconnect',()=>{
        console.log("User disconnected")
    })
})


app.use(express.static(publicPath))


server.listen(process.env.PORT || 8080,()=>{
    console.log("listening at 8080")
})