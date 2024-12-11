import express from "express";
import userRouter from "./routes/user.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { Server as SocketServer } from 'socket.io'; // import the server part of socket.io
import http from 'http';
import globalErrorController from "./controllers/error.controller.js"


const app = express();
const server = http.createServer(app);
const io = new SocketServer(server);

// Listen for socket connection
io.on('connection', (socket) => {
  console.log('A user connected');

  // Listen for custom events from the client
  socket.on('message', (data) => {
    console.log('Message from client:', data);
    // Broadcast to all clients except the sender
    socket.broadcast.emit('message', data);
  });

  // Handle socket disconnect
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// development logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"))
}

const allowedOrigins = process.env.CORS_ORIGIN.split(",") // split the string by comma and store in array

app.use(
  cors({
    origin: allowedOrigins, // only the url of cors origin is allowed and pass allowedOrigins
    credentials: true,
  })
)

app.use(express.json({ limit: "16kb" })) // cann remove limit. set this only when limiting json.
app.use(express.urlencoded({ extended: true, limit: "16kb" })) // allows to receive data from url by encoding special characters.
app.use(express.static("public")) // allows to store static data received from frontend into public.

app.use(cookieParser()) // allows to access cookies of browser as well set the cookies.

// routes
app.use("/api/v1/user", userRouter)

app.use(globalErrorController)

export { app }
export { server }
